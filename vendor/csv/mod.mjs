import { parse } from "./parse-csv.mjs";
import { stringify } from "./stringify-csv.mjs";

export const CSV = {
  /** @type {(csv: string, skipFirstRow?: boolean) => string[][]} */
  parse: (csv, skipFirstRow) => parse(csv, { skipFirstRow }),
  /** @type {(data: Record<string,unknown>[], options: import('./types.d.ts').StringifyOptions) => string} */
  stringify: (data, options) => stringify(data, options),
};

/** @param {string} file */
export const readCsv = (file) => {
  /** @type {string[]} */
  let head;
  /** @type {Record<string,string>[]} */
  const result = [];

  for (const row of CSV.parse(file)) {
    if (!head) {
      head = row;
    } else {
      result.push(
        head.reduce((r, key, index) => ({ ...r, [key]: row[index] }), {}),
      );
    }
  }

  return result;
};
