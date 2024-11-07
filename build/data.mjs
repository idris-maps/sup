// @ts-check
import { safeParseYaml } from "../vendor/yaml/mod.mjs";
import { readCsv } from "../vendor/csv/mod.mjs";
import { concatPaths, getFileInfo } from "../utils/mod.mjs";

/**
 * @typedef {import('../runtime/type.ts').Runtime} Runtime
 * @typedef {import('./types.ts').Page} Page
 * @typedef {import('../vendor/handlebars/types.ts').HbsCompile} HbsCompile
 */

/** @type {(runtime: Runtime, pathToFolder: string) => Promise<Record<string,unknown>>} */
export const getGlobalData = async (runtime, pathToFolder) => {
  try {
    const file = await runtime.readTextFile(pathToFolder + "/global.yaml");
    const json = safeParseYaml(file || "");
    const { head_meta, stylesheets, scripts, ...rest } = json;
    return {
      head_meta: Array.isArray(head_meta) ? head_meta : [],
      stylesheets: Array.isArray(stylesheets) ? stylesheets : [],
      scripts: Array.isArray(scripts) ? scripts : [],
      ...rest,
    };
  } catch {
    return {
      head_meta: [],
      stylesheets: [],
      scripts: [],
    };
  }
};

/** @type {(runtime: Runtime, pathToDataFile: string) => Promise<unknown>} */
export const readDataFile = async (runtime, pathToDataFile) => {
  /** @param {string} path */
  const readCsvFile = async (path) => {
    const file = await runtime.readTextFile(path);
    return file ? readCsv(file) : [];
  };
  const { ext } = getFileInfo(pathToDataFile);
  try {
    switch (ext) {
      case "json":
        return runtime.readJsonFile(pathToDataFile);
      case "csv":
        return readCsvFile(pathToDataFile);
      case "yaml":
        return safeParseYaml(await runtime.readTextFile(pathToDataFile) || "");
      default:
        return undefined;
    }
  } catch {
    return undefined;
  }
};

/**
 * @param {Runtime} runtime
 * @param {string} mainFolder
 * @param {Record<string,unknown>} data
 * @returns {Promise<Record<string,unknown>>}
 */
export const getDataFromFiles = async (runtime, mainFolder, data = {}) => {
  /** @type {Record<string,unknown>} */
  const result = {};
  if (data.data) {
    for (const [key, value] of Object.entries(data.data)) {
      try {
        result[key] = await readDataFile(
          runtime,
          mainFolder + "/data/" + value,
        );
      } catch {
        result[`${key}_error`] = `could not get data from ${value}`;
        continue;
      }
    }
  }
  return result;
};

/** @type {(objects: Record<string,unknown>[], key: string) => string[]} */
const mergeArrays = (objects, key) => {
  const result = [];
  for (const obj of objects) {
    if (Array.isArray(obj[key])) {
      for (const d of obj[key]) {
        result.push(d);
      }
    }
  }
  return result;
};

/** @type {(objects: Record<string,unknown>[], key: string) => Record<string,unknown>} */
const mergeObjects = (objects, key) =>
  objects.reduce((r, d) => {
    if (typeof d[key] === "object" && !Array.isArray(d)) {
      r = { ...r, ...d[key] };
    }
    return r;
  }, {});

/**
 * @param {object} args
 * @param {string} args.relativePath
 * @param {boolean} [args.isDev]
 */
const assetsPaths = ({ relativePath, isDev }) => {
  const path = relativePath.startsWith("/")
    ? relativePath.slice(1)
    : relativePath;
  const depth = path.split("/").length + (isDev ? 0 : -1);
  /** @type {(assets: string[]) => string[]} */
  return (assets) =>
    assets.map((d) =>
      [...Array.from(Array(depth)).map(() => `..`), d].join("/")
    );
};

/**
 * @param {Runtime} runtime
 * @param {object} args
 * @param {Page} args.page
 * @param {Record<string,unknown>} args.globalData
 * @param {Record<string,unknown>} args.pageData
 * @param {boolean} args.isDev
 * @returns {Promise<Record<string,unknown>>}
 */
export const joinData = async (
  runtime,
  { page, globalData, pageData, isDev },
) => {
  const pagesFolder = page.filePath.slice(0, -(page.relativePath.length + 1));
  const mainFolder = pagesFolder.split("/").slice(0, -1).join("/");
  const objects = [
    globalData,
    page.data || {},
    pageData,
  ];
  const fileData = await getDataFromFiles(runtime, mainFolder, {
    data: mergeObjects(objects, "data"),
  });
  objects.push(fileData);

  const setPathsToAssets = assetsPaths({
    relativePath: page.relativePath,
    isDev,
  });

  /** @type {Record<string,unknown>} */
  const response = {
    ...globalData,
    ...(page.data || {}),
    ...pageData,
    ...fileData,
    head_meta: mergeArrays(objects, "head_meta"),
    scripts: setPathsToAssets(mergeArrays(objects, "scripts")),
    stylesheets: setPathsToAssets(mergeArrays(objects, "stylesheets")),
  };
  if (response.layout) {
    const layout = String(response.layout);
    if (layout.startsWith("partials/")) {
      response.layout = concatPaths(pagesFolder, "../" + layout);
    } else {
      response.layout = undefined;
      response.layout_error = 'layout must be in the "partials" folder';
    }
  }
  return response;
};

/**
 * @param {Runtime} runtime
 * @param {Page} page
 * @param {HbsCompile} hbsCompile
 * @returns {Promise<Record<string,unknown>>}
 */
export const getHtmlPageData = async (runtime, page, hbsCompile) => {
  try {
    const pageDataFile = page.pageDataFile ||
      page.filePath.slice(0, -5) + ".yaml";
    let yaml = await runtime.readTextFile(pageDataFile);
    if (yaml && page.data) {
      yaml = hbsCompile(yaml)(page.data);
    }
    return safeParseYaml(yaml || "");
  } catch {
    return {};
  }
};
