import { parse } from "./parse-yaml.mjs";
import { stringify } from "./stringify-yaml.mjs";

/** @type {(content: string, options?: import('./types').ParserOptions) => Record<string,unknown>} */
export const safeParseYaml = (content, options) => {
  try {
    return parse(content, options) || {};
  } catch {
    return {};
  }
};

export const YAML = {
  /** @type {(content: string, options?: import('./types').ParserOptions) => unknown} */
  parse,
  /** @type {(obj: Record<string,unknown>, options?: import('./types').StringifyOptions) => string} */
  stringify,
  safeParse: safeParseYaml,
};
