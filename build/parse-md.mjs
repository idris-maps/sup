// @ts-check
import { hbsCompile } from "../vendor/handlebars/mod.mjs";

/**
 * @param {(d?: unknown) => boolean} condition
 * @param {Generator<string>} iterable
 * @returns {[Generator<string>,Generator<string>]}
 */
const splitAsLongAs = (condition, iterable) => {
  const source = iterable[Symbol.iterator]();
  /** @type {string[]} */
  const buffer = [];
  const stop0 = Symbol(0);
  const stop1 = Symbol(1);
  /** @type {(d: unknown) => boolean} */
  const isT = (d) => (Boolean(d) || d === "") && d !== stop0 && d !== stop1;

  /** @param {number} i */
  const next = (i) => {
    if (i === 1 && buffer.length !== 0) {
      return buffer.shift();
    }
    const r = source.next();
    if (r.done) {
      return stop1;
    }
    if (i === 0) {
      if (condition(r.value)) {
        return r.value;
      } else {
        buffer.push(r.value);
        return stop0;
      }
    } else {
      if (!condition(r.value)) {
        return r.value;
      } else {
        return undefined;
      }
    }
  };

  function* one() {
    let run = true;
    while (run) {
      const v = next(0);
      if (v === stop0) run = false;
      if (isT(v)) yield v;
    }
  }

  function* two() {
    let run = true;
    while (run) {
      const v = next(1);
      if (v === stop1) run = false;
      if (isT(v)) yield v;
    }
  }
  // @ts-ignore ?
  return [one(), two()];
};

const FRONTMATTER_FENCE = "---";

const condition = () => {
  /** @type {string|undefined} */
  let first;
  let isFrontmatter = false;

  /** @param {string} line */
  return (line) => {
    if (!first) {
      first = line;
      isFrontmatter = line.trim() === FRONTMATTER_FENCE;
      return isFrontmatter;
    } else {
      if (isFrontmatter) {
        if (line.trim() === FRONTMATTER_FENCE) {
          isFrontmatter = false;
        }
        return true;
      } else {
        return false;
      }
    }
  };
};

/** @param {Generator<string>} lines */
// @ts-ignore ?
export const separateFrontmatter = (lines) => splitAsLongAs(condition(), lines);

/**
 * @param {Generator<string>} lines
 * @param {Record<string,unknown>} [data]
 */
const frontmatterFromIterable = (lines, data = {}) => {
  let fm = "";
  let hasVars = false;
  for (const d of lines) {
    if (d !== FRONTMATTER_FENCE) {
      if (d.includes("{{") && !hasVars) hasVars = true;
      fm = fm + "\n" + d;
    }
  }
  fm = fm.trim();
  if (hasVars && Object.keys(data).length) {
    return hbsCompile(fm)(data);
  }
  return fm;
};

/**
 * @typedef {object} Part
 * @prop {'md'|'code'|'hr'} type
 * @prop {string} content
 * @prop {string} [lang]
 */

const CODE_FENCE = "```";

/** @type {(d?: string) => string} */
const trimIfDefined = (d) => {
  if (!d) return "";
  return d.trim();
};

/** @type {(iterator: Generator<string>) => Generator<Part>} */
const separateCodeblocks = function* (iterator) {
  let isCode = false;
  let lang = undefined;
  let current = undefined;

  for (const line of iterator) {
    if (line.startsWith(CODE_FENCE)) {
      if (!isCode) {
        yield { type: "md", content: trimIfDefined(current) };
        const _lang = line.split(CODE_FENCE)[1];
        if (_lang !== "") lang = _lang;
        current = undefined;
        isCode = true;
      } else {
        yield { type: "code", lang, content: trimIfDefined(current) };
        lang = undefined;
        current = undefined;
        isCode = false;
      }
    } else {
      current = (current || "") + "\n" + line;
    }
  }

  yield { type: "md", content: trimIfDefined(current) };
};

/** @type {(iterator: Generator<Part>) => Generator<Part>} */
const separatePresentationSections = function* (iterable) {
  for (const part of iterable) {
    if (part.type === "code" || !part.content.includes("***")) {
      yield part;
    } else {
      const lines = part.content.split("\n").map((d) => d.trim());
      let current = "";
      for (const line of lines) {
        if (line === "***") {
          yield { type: "md", content: current };
          current = "";
          yield { type: "hr", content: "***" };
        } else {
          current = current + "\n" + line;
        }
      }
      if (current !== "") {
        yield { type: "md", content: current };
      }
    }
  }
};

/**
 * @param {Generator<string>} lines
 * @param {Record<string,unknown>} [data]
 */
export const parseMd = (lines, data) => {
  const [fmLines, mdLines] = separateFrontmatter(lines);
  const frontmatter = frontmatterFromIterable(fmLines, data);
  const parts = separateCodeblocks(mdLines);
  if (!frontmatter.includes("is_presentation")) {
    return { frontmatter, parts };
  }
  return { frontmatter, parts: separatePresentationSections(parts) };
};
