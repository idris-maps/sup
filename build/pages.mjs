// @ts-check
/**
 * @typedef {import('../runtime/type.ts').Runtime} Runtime
 * @typedef {import('../vendor/handlebars/types.ts').HbsCompile} HbsCompile
 */
import { getFileInfo } from "../utils/mod.mjs";
import { hbsInit } from "../vendor/handlebars/mod.mjs";
import { safeParseYaml } from "../vendor/yaml/mod.mjs";
import { getHtmlPageData, joinData, readDataFile } from "./data.mjs";
import { parseMd } from "./parse-md.mjs";
import { mdParts2html } from "./md-parts-to-html.mjs";

/** @type {(runtime: Runtime, mainFolder: string) => Promise<HbsCompile>} */
export const getHbsCompile = async (runtime, mainFolder) => {
  const folder = mainFolder + "/partials";
  /** @type {{ name: string, content: string }[]} */
  const partials = [];
  for await (const file of runtime.getFilesDeep(folder)) {
    partials.push({
      name: file.slice(folder.length + 1, -5),
      content: await runtime.readTextFile(file) || "",
    });
  }
  /** @type {{ name: string, helper: (d: unknown) => string }[]} */
  const helpers = [
    { name: "json-stringify", helper: (d) => JSON.stringify(d, null, 2) },
  ];
  const _compile = hbsInit({ partials, helpers });
  /** @type {import('../vendor/handlebars/types.ts').HbsCompile} */
  const compile = (template, options) => {
    return (data) => {
      try {
        return _compile(template, options)(data);
      } catch (err) {
        console.log(
          `ERROR handlebars could not compile: ${err?.message}`,
        );
        return template;
      }
    };
  };
  return compile;
};

/**
 * @param {Runtime} runtime
 * @param {object} args
 * @param {string} args.content
 * @param {'html'|'md'} args.ext
 * @param {string} args.filePath
 * @param {string} args.mainFolder
 * @param {string} args.withoutExt
 * @returns {AsyncGenerator<import('./types.ts').Page>}
 */
async function* getMultiPages(
  runtime,
  { content, ext, filePath: originalFilePath, mainFolder, withoutExt },
) {
  const [dataFile, key] = withoutExt.slice(1, -1).split("|");
  const itemsData = await readDataFile(
    runtime,
    mainFolder + "/data/" + dataFile,
  );
  if (!itemsData || !Array.isArray(itemsData)) return;
  const folder = originalFilePath.slice(
    0,
    -(withoutExt.length + ext.length + 2),
  );
  for (const item of itemsData) {
    if (item[key]) {
      const filePath = `${folder}/${item[key]}.${ext}`;
      const relativePath = filePath.split(mainFolder + "/pages/")[1];
      const pageDataFile = ext === "html"
        ? `${folder}/${withoutExt}.yaml`
        : undefined;
      yield {
        type: ext,
        content,
        filePath,
        relativePath,
        data: item,
        pageDataFile,
      };
    }
  }
}

/** @type {(withoutExt: string) => boolean} */
const isMultiPage = (withoutExt) =>
  withoutExt.startsWith("[") &&
  withoutExt.endsWith("]") &&
  withoutExt.includes("|");

/** @type {(runtime: Runtime, mainFolder: string) => AsyncGenerator<import('./types.ts').Page>} */
export async function* getPages(runtime, mainFolder) {
  const folder = mainFolder + "/pages";
  for await (const filePath of runtime.getFilesDeep(folder)) {
    const { ext, withoutExt } = getFileInfo(filePath);
    if (!ext || !["html", "md"].includes(ext)) continue;
    const type = /** @type {'html'|'md'} */ (ext);
    const content = await runtime.readTextFile(filePath) || "";
    if (isMultiPage(withoutExt)) {
      for await (
        const d of getMultiPages(runtime, {
          content,
          ext: type,
          filePath,
          mainFolder,
          withoutExt,
        })
      ) {
        yield d;
      }
    } else {
      const relativePath = filePath.slice(folder.length + 1);
      yield {
        type,
        content: await runtime.readTextFile(filePath) || "",
        filePath,
        relativePath,
      };
    }
  }
}

/**
 * @param {Runtime} runtime
 * @param {string} fileName
 * @param {string} fileContent
 */
const write = async (runtime, fileName, fileContent) => {
  await runtime.mkdir(fileName.split("/").slice(0, -1).join("/").split(" ")[0]);
  await runtime.writeTextFile(fileName, fileContent);
  console.log(`wrote file "${fileName}"`);
};

/**
 * @param {Runtime} runtime
 * @param {object} args
 * @param {Record<string,unknown>} args.data
 * @param {string} args.fileContent
 * @param {import('../vendor/handlebars/types.ts').HbsCompile} args.hbsCompile
 */
const handleLayout = async (runtime, { data, fileContent, hbsCompile }) => {
  if (!data.layout) return fileContent;
  try {
    const layout = await runtime.readTextFile(String(data.layout));
    return hbsCompile(layout || "")({ ...data, content: fileContent });
  } catch {
    return fileContent;
  }
};

/**
 * @param {Runtime} runtime
 * @param {object} args
 * @param {Record<string,unknown>} args.globalData
 * @param {import('../vendor/handlebars/types.ts').HbsCompile} args.hbsCompile
 * @param {string} args.mainFolder
 * @param {import('./types.ts').Page} args.page
 * @param {boolean} args.isDev
 */
const writeHtmlPage = async (
  runtime,
  { globalData, hbsCompile, mainFolder, page, isDev },
) => {
  const fileName = mainFolder + "/dist/" + page.relativePath;
  const data = await joinData(runtime, {
    page,
    globalData,
    pageData: await getHtmlPageData(runtime, page, hbsCompile),
    isDev,
  });
  const fileContent = hbsCompile(page.content)(data);
  await write(
    runtime,
    fileName,
    await handleLayout(runtime, { data, fileContent, hbsCompile }),
  );
};

/**
 * @param {Runtime} runtime
 * @param {object} args
 * @param {Record<string,unknown>} args.globalData
 * @param {import('../vendor/handlebars/types.ts').HbsCompile} args.hbsCompile
 * @param {string} args.mainFolder
 * @param {import('./types.ts').Page} args.page
 * @param {boolean} args.isDev
 */
const writeMdPage = async (
  runtime,
  { globalData, hbsCompile, mainFolder, page, isDev },
) => {
  const fileName = (mainFolder + "/dist/" + page.relativePath).slice(0, -3) +
    ".html";
  function* mdLines() {
    // adds empty lines so that it continues yielding when only has frontmatter
    for (const line of (page.content + "\n\n").split("\n")) {
      yield line;
    }
  }
  const { frontmatter, parts } = parseMd(mdLines(), {
    ...globalData,
    ...(page.data || {}),
  });
  const data = await joinData(runtime, {
    page,
    globalData,
    pageData: safeParseYaml(frontmatter || ""),
    isDev,
  });
  let fileContent = "";
  for await (const part of mdParts2html(parts, data, hbsCompile)) {
    fileContent = fileContent + part;
  }
  await write(
    runtime,
    fileName,
    await handleLayout(runtime, { data, fileContent, hbsCompile }),
  );
};

/**
 * @param {Runtime} runtime
 * @param {object} args
 * @param {Record<string,unknown>} args.globalData
 * @param {string} args.mainFolder
 * @param {boolean} args.isDev
 */
export const writePages = async (
  runtime,
  { globalData, mainFolder, isDev },
) => {
  const hbsCompile = await getHbsCompile(runtime, mainFolder);
  for await (const page of getPages(runtime, mainFolder)) {
    if (page.type === "html") {
      writeHtmlPage(runtime, {
        mainFolder,
        hbsCompile,
        page,
        globalData,
        isDev,
      });
    }
    if (page.type === "md") {
      writeMdPage(runtime, { mainFolder, hbsCompile, page, globalData, isDev });
    }
  }
};
