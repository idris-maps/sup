export const files = [
  {
    "path": "partials/log-data.html",
    "content": "<script>\nconsole.log({{{json-stringify this}}})\n</script>",
  },
  {
    "path": "partials/layout.html",
    "content":
      "<!DOCTYPE html>\n<html>\n  {{> head}}\n  <body>\n    <main>\n      {{{content}}}\n    </main>\n  </body>\n</html>",
  },
  {
    "path": "partials/partial-example.html",
    "content": "<h1>{{title}}</h1>",
  },
  {
    "path": "partials/head.html",
    "content":
      '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <title>{{title}}</title>\n  {{#each head_meta}}\n    <meta name="{{name}}" content="{{content}}"/>\n  {{/each}}\n  {{#each stylesheets}}\n    <link rel="stylesheet" href="{{this}}">\n  {{/each}}\n  {{#each scripts}}\n    <script src="{{this}}" defer></script>\n  {{/each}}\n</head>',
  },
  {
    "path": "assets/style.css",
    "content":
      ":root {\n  --black: #141616;\n  --white: rgb(235, 235, 235);\n  --primary: steelblue;\n}\n\nbody {\n  background-color: var(--white);\n  color: var(--black);\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  line-height: 1.8;\n  margin: 0;\n  padding: 0;\n}\n\nmain {\n  width: 90%;\n  max-width: 1080px;\n  margin: 2em auto;\n}\n\nbutton {\n  border: none;\n  cursor: pointer;\n  padding: .5em 1em;\n  border-radius: .3em;\n  background-color: var(--primary);\n  color: var(--white);\n  font-size: inherit;\n}\n\na {\n  color: var(--primary);\n}\n\npre {\n  background-color: var(--black);\n  padding: 0.5em;\n}\n\ncode {\n  background-color: var(--black);\n  color: var(--white);\n  padding: 0 0.2em;\n}\n\n.serea {\n  text-align: center;\n}\n\n.serea svg {\n  max-height: 50vh;\n}",
  },
  {
    "path": "assets/counter-button.js",
    "content":
      'class CounterButtonElementElement extends HTMLButtonElement {\n  constructor() {\n    super();\n\n    /** @type {number} */\n    this.count = 0;\n  }\n\n  connectedCallback() {\n    const setLabel = () => {\n      this.textContent = `Clicked ${this.count} time${\n        this.count == 1 ? "" : "s"\n      }`;\n    };\n    this.addEventListener("click", () => {\n      ++this.count;\n      setLabel();\n    });\n    setLabel();\n  }\n}\n\ncustomElements.define("counter-button", CounterButtonElementElement, {\n  extends: "button",\n});',
  },
  {
    "path": "data/users.csv",
    "content":
      "name,age\nAlice,29\nBob,82\nCecile,54\nDiana,16\nEmma,41\nFrank,38\nGrace,67\nHenry,73",
  },
  {
    "path": "data/products.json",
    "content":
      '[\n  { "name": "Apples", "price": 1.50 },\n  { "name": "Bananas", "price": 2.20 }\n]',
  },
  {
    "path": "global.yaml",
    "content":
      "head_meta:\n  - name: author\n    content: me\nstylesheets:\n  - assets/style.css",
  },
  {
    "path": "pages/index.html",
    "content":
      '<!DOCTYPE html>\n<html>\n  {{> head}}\n  <body>\n    <main>\n      {{> partial-example}}\n      <p>The title above comes from a the <code>partial-example.html</code> partial using data from <code>index.yaml</code>.</p>\n      <p>This button is a webcomponent defined in <code>assets/counter-button.js</code>:</p>\n      <button is="counter-button">\n        Clicking this does nothing if js is not enabled\n      </button>\n      <br />\n      <p>See <a href="./with-data.html">this page</a> for how to use data from files</p>\n    </main>\n  </body>\n</html>',
  },
  {
    "path": "pages/[users.csv|name].md",
    "content":
      "---\ntitle: {{name}}\nlayout: partials/layout.html\n---\n\n# My name is {{name}}, I am {{age}} years old",
  },
  {
    "path": "pages/with-data.md",
    "content":
      '---\ntitle: Data from files\ndata:\n  products: products.json\n  users: users.csv\nlayout: partials/layout.html\n---\n\n# {{title}}\n\nData is injected into this page with the following "frontmatter":\n\n```\ndata:\n  products: products.json\n  users: users.csv\n```\n\nFor HTML pages, you can do the same in a YAML file with the same name.\nFor example, if you have a `my-page.html`, the file should be called `my-page.yaml`.\n\n## Data from json files\n\nThis is generated with data from `data/products.json`:\n\n{{#each products}}\n- {{this.name}} cost {{this.price}}\n{{/each}}\n\n## Data from csv files\n\nThis is generated with data from `data/users.csv`:\n\n```bar-chart\nwidth: 400\nheight: 100\n---\nUser name,Age\n{{#each users}}\n{{this.name}},{{this.age}}\n{{/each}}\n```\n\nAll [serea](https://serea.deno.dev/) charts are supported in markdown files.\n\n### User pages\n\nPages can be generated based on data when the file name starts with `[` and ends with `]`.\nThe text in between says from which file the data should be taken and which column (or key for JSON) should be used as file name.\n\nFor example `[users.csv|name].md` means: "create a file for each row of `users.csv`, use the `name` column as file name".\n\nHere are the links to the generated pages\n\n{{#each users}}\n* [{{this.name}}](./{{this.name}}.html)\n{{/each}}\n\n## Debugging\n\nTo see what data has been passed to a page, use the `log-data` partial and open the browser console.\n\n{{> log-data}}\n',
  },
  {
    "path": "pages/index.yaml",
    "content":
      'title: "Hello world"\nhead_meta:\n  -\n    name: description\n    content: A hello world page\nscripts:\n  - assets/counter-button.js',
  },
];
