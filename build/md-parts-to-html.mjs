// @ts-check
import { md2html } from "../vendor/marked/mod.mjs";
import { renderCodeBlock } from "../vendor/serea/mod.mjs";

/**
 * @typedef {import('../runtime/type.ts').Runtime} Runtime
 */

/**
 * @param {Record<string,unknown>} data
 * @param {Generator<import('./parse-md.mjs').Part>} parts
 * @param {import('../vendor/handlebars/types.ts').HbsCompile} hbsCompile
 */
const applyData = function* (data, parts, hbsCompile) {
  for (const d of parts) {
    d.content = hbsCompile(d.content)(data);
    yield d;
  }
};

/**
 * @param {import('./parse-md.mjs').Part} part
 */
const render = (part) => {
  if (part.type === "md") {
    return md2html(part.content);
  }
  return renderCodeBlock(part.content, part.lang);
};

/**
 * @param {Record<string,unknown>} data
 * @param {Generator<import('./parse-md.mjs').Part>} parts
 * @param {import('../vendor/handlebars/types.ts').HbsCompile} hbsCompile
 */
const renderParts = async function* (data, parts, hbsCompile) {
  if (data.is_presentation) {
    let isFirstSection = true;
    let current = "";
    for (const part of applyData(data, parts, hbsCompile)) {
      if (part.type === "hr" && current !== "") {
        yield `
  <section ${isFirstSection ? "" : 'class="hidden"'}>
    ${current}
  </section>`;
        current = "";
        isFirstSection = false;
      } else {
        current = current + await render(part);
      }
    }
    if (current !== "") {
      yield `
  <section ${isFirstSection ? "" : 'class="hidden"'}>
    ${current}
  </section>`;
    }
  } else {
    for (const part of applyData(data, parts, hbsCompile)) {
      yield await render(part);
    }
  }
};

/**
 * @param {Generator<import('./parse-md.mjs').Part>} parts
 * @param {Record<string,unknown>} data
 * @param {import('../vendor/handlebars/types.ts').HbsCompile} hbsCompile
 * @returns {AsyncGenerator<string>}
 */
export async function* mdParts2html(parts, data, hbsCompile) {
  for await (const part of renderParts(data, parts, hbsCompile)) {
    yield part;
  }
}
