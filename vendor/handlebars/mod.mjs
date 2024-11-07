import hbs from "./handlebars.mjs";

/** @type {import('./types.ts').HbsCompile} */
export const hbsCompile = hbs.compile;

/**
 * @param {object} [args={}]
 * @param {{name: string, content: string}[]} [args.partials=[]]
 * @param {{name: string, helper: (d: unknown) => string}[]} [args.helpers=[]]
 * @returns {import('./types.ts').HbsCompile}
 */
export const hbsInit = (args = {}) => {
  for (const { name, content } of args.partials || []) {
    hbs.registerPartial(name, content);
  }
  for (const { name, helper } of args.helpers || []) {
    hbs.registerHelper(name, helper);
  }
  return hbs.compile;
};
