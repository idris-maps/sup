// deno-lint-ignore-file

import {
  copyFile as nodeCopyFile,
  mkdir as nodeMkdir,
  readdir,
  readFile,
  rm as nodeRmdir,
  writeFile,
} from "node:fs/promises";

/** @returns {Record<string,string|boolean>} */
export const parseArgs = () => {
  return process.argv
    .filter((d) => d.startsWith("--"))
    .reduce(
      (r, d) => {
        const [arg, value] = d.split("=");
        return { ...r, [arg.substring(2)]: value || true };
      },
      {},
    );
};

/** @returns {string[]} */
export const getArgs = () => process.argv.slice(2);

/** @type {(path: string) => Promise<string|undefined>} */
export const readTextFile = (path) => {
  try {
    return readFile(path, { encoding: "utf-8" });
  } catch {
    return undefined;
  }
};

/** @type {(path: string, text: string) => Promise<void>} */
export const writeTextFile = (path, text) =>
  writeFile(path, text, { encoding: "utf-8" });

/** @type {(path: string) => unknown} */
export const readJsonFile = async (path) => {
  try {
    return JSON.parse(await readTextFile(path));
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

/** @returns {string} */
export const commandDir = () => process.env.PWD;

/** @type {(path?: string) => Promise<[boolean,string[]]>} */
export const tryReaddir = async (path = ".") => {
  try {
    const files = await readdir(path, { encoding: "utf-8" });
    return [true, files];
  } catch {
    return [false, []];
  }
};

/**
 * @param {string} [path]
 * @returns {AsyncGenerator<string>}
 */
export const getFilesDeep = async function* (path = ".") {
  const [isFolder, files] = await tryReaddir(path);
  if (isFolder) {
    for (const file of files) {
      for await (const child of getFilesDeep(path + "/" + file)) {
        yield child;
      }
    }
  } else {
    yield path;
  }
};

/** @type {(path: string) => Promise<void>} */
export const mkdir = (path) => nodeMkdir(path, { recursive: true });

/** @type {(path: string) => Promise<void>} */
export const rmdir = (path) =>
  nodeRmdir(path, { recursive: true, force: true });

/** @type {(from: string, to: string) => Promise<void>} */
export const copyFile = (from, to) => nodeCopyFile(from, to);

/** @type {import('./type.ts').Runtime} */
export const runtime = {
  parseArgs,
  getArgs,
  readTextFile,
  writeTextFile,
  readJsonFile,
  commandDir,
  tryReaddir,
  getFilesDeep,
  mkdir,
  rmdir,
  copyFile,
};
