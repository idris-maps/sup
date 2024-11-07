import * as marked from "./marked.mjs";

/** @type {(md: string) => string} */
export const md2html = (md) => marked.parse(md);
