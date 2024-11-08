# sup

```
         ___                    
        F __".  _    _    _ ___   
       J (___| J |  | L  J '__ J  
       J\___ \ | |  | |  | |--| | 
      .--___) \F L__J J  F L__J J 
      J\______J\____,__LJ  _____/L
       J______FJ____,__F|_J_____F 
                        L_J

        ... and your site is up
```

A static site generator in one executable driven by text files (`.md`, `.html`, `.csv`, `.json` and `.yaml`), based on [handlebars](https://handlebarsjs.com) templating and supporting [serea](https://serea.deno.dev/) charts in markdown code blocks.

---

* [commands](#commands)
* [usage](#usage)
* [install](#install)

---

## commands

### init

```
sup init <folder>
```

This will create the necessary file structure in `<folder>` with some example files that you can remove or modify.

```
.
├── assets
│   ├── counter-button.js
│   └── style.css
├── data
│   ├── products.json
│   └── users.csv
├── global.yaml
├── pages
│   ├── index.html
│   ├── index.yaml
│   ├── [users.csv|name].md
│   └── with-data.md
└── partials
    ├── head.html
    ├── layout.html
    ├── log-data.html
    └── partial-example.html
```

* the `assets` folder is for styles, images, scripts and other assets. it will be copied to the site folder when built.
* the `data` folder contains data in csv, json and yaml files that will injected into your pages or used to generate pages.
* the `global.yaml` is data that you want to be passed to every page. this is where you add global styles, scripts and `<meta>` tags.
* the `pages` folder contains the files that will be become your site. the file structure here reflects that of your site. it should contain `.md` and `.html` files. as HTML files can not have [frontmatter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/) a `.yaml` file with the same name plays the same role.
* the `partials` contain handlebars partials and layouts.

### build

```
sup build `<folder>`
```

Will generate your site in `<folder>/dist`. This folder is the final product and can be served as is.

### dev

```
sup dev `<folder>`
```

Does the same as `build` but assets are still linked to the ones `<folder>/assets` so that you can hack on your styles and scripts without rebuilding every time.

## usage

### how data is passed to handlebars

1. frontmatter for `.md` pages (and YAML files with the same name for `.html` pages) is passed as is to handlebars

```yaml
title: My title
products:
  -
    name: apples
    price: 1.50
  -
    name: bananas
    price: 2.20
```

can be used in markdown as:

```md
# {{title}}

{{#each products}}
- {{this.name}} cost {{this.price}}
{{/each}}
```

and in html as:

```html
<h1>{{title}}</h1>

<ul>
{{#each products}}
  <li>{{this.name}} cost {{this.price}}</li>
{{/each}}
</ul>
```

2. data from the `data` folder is added to a page with the `data` key in the frontmatter

This:

```yaml
title: My title
data:
  products: products.json
```

will result in the same as in the example above if there is a `<folder>/data/products.json` file that looks like this.

```json
[
  { "name": "Apples", "price": 1.50 },
  { "name": "Bananas", "price": 2.20 }
]
```

any `.json`, `.csv` or `.yaml` in `<folder>/data` can be used.

3. data from `<folder>/global.yaml` is added to every page.

**important**

note that data per page is collected in the following order:

- `global.yaml`
- frontmatter
- `data` key and folder as described under (2) above

beware that data may be overridden. if you for example have:

```yaml
products:
  -
    name: oranges
    price: 1.70
  -
    name: pineapples
    price: 2.10
data:
  products: products.json
```

`products` will be the one from `<folder>/data/products.json` as it is added later.

the exception to this rule are the special keys `meta_head`, `scripts`, `stylesheets` that are used to create the `<head>` of the page. these are arrays that get merged rather than overwritten.

you can for example have a stylesheet in `<folder>/global.yaml`

```yaml
stylesheets:
  - assets/style.css
```

and some other for the page:

```yaml
  stylesheets:
    - assets/a.css
    - assets/b.css
```

`stylesheets` will contain all three. this can then be used in a partial to render the `<head>` of the page. the one in the examples created with the `init` command looks like this:

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{{title}}</title>
  {{#each head_meta}}
    <meta name="{{name}}" content="{{content}}"/>
  {{/each}}
  {{#each stylesheets}}
    <link rel="stylesheet" href="{{this}}">
  {{/each}}
  {{#each scripts}}
    <script src="{{this}}" defer></script>
  {{/each}}
</head>
```

**debugging**

to see what data is passed to your template, the following partial will log all data in the console:

```
{{> log-data}}
```

### partials and layout

all files in `<folder>/partials` are added to handlebars with the same name. if you have a file called `<folder>/partials/my-partial.html`, it can be added to your page with:

```
{{> my-partial}}
```

layouts work the other way around, your page will be added to the layout as `{{{content}}}`

if you have a `<folder>/partials/my-layout.html` like:

```html
<h1>A layout</h1>
{{{content}}}
```

and a page `<folder>/pages/my-page.md` like:

```md
---
layout: partials/my-layout.html
---

## Hello from the page
```

the result will be:

```html
<h1>A layout</h1>
<h2>Hello from the page</h2>
```

## install

the file can be downloaded [here](https://github.com/idris-maps/sup/releases). which one you need depends on where you will use it.

1. the `sup` binary

this one was built with [quick.js](https://bellard.org/quickjs) on my machine, a pretty standard linux laptop. if you have a similar setup, download that one and make it executable with `chmod u+x ./sup`.

if you are on another architecture and have `qjsc` installed, clone this repo and see the `quick` part of `scripts/build.sh`

2. the `sup.deno.js` file

use this one if you have [deno](https://deno.com/) installed, make it executable with `chmod u+x ./sup.deno.js` and run as:

```
./sup.deno.js <command>
```

3. the `sup.node.js` file

use this one if you have [node](https://nodejs.org) installed, make it executable with `chmod u+x ./sup.node.js` and run as:

```
./sup.node.js <command>
```
