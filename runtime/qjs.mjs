// deno-lint-ignore-file
import * as std from "std";
import * as os from "os";

/**
 * @param {string} command
 * @returns {string[]}
 */
const getCmdStdout = (command) => {
  const out = std.popen(command, "r");
  const result = [];
  let run = true;
  while (run) {
    const line = out.getline();
    if (line) {
      result.push(line);
    } else {
      run = false;
    }
  }
  return result;
};

/** @type {() => Record<string,string|boolean>} */
export const parseArgs = () =>
  scriptArgs
    .filter((d) => d.startsWith("--"))
    .reduce(
      (r, d) => {
        const [arg, value] = d.split("=");
        return { ...r, [arg.substring(2)]: value || true };
      },
      {},
    );

/** @type {() => string[]} */
export const getArgs = () => scriptArgs.slice(1);

/** @param {string} str */
const stringToArrayBuffer = (str) => {
  const buffer = new ArrayBuffer(str.length);
  const uint = new Uint8Array(buffer);
  const length = str.length;
  for (let i = 0; i < length; i++) {
    uint[i] = str.charCodeAt(i);
  }
  return buffer;
};

/** @type {(path: string, text: string) => Promise<void>} */
export const writeTextFile = async (path, text) => {
  try {
    os.remove(path);
    os.close(os.open(path, os.O_CREAT));
    const f = os.open(path, os.O_WRONLY);
    const b = stringToArrayBuffer(text);
    os.write(f, b, 0, b.byteLength);
    os.close(f);
  } catch (err) {
    console.log(`Error writing ${path}: ${err}`);
  }
};

/** @type {(path: string) => Promise<string|null>} */
export const readTextFile = (path) => {
  try {
    return std.loadFile(path);
  } catch {
    return undefined;
  }
};

/** @type {<T>(path: string) => Promise<T | undefined>} */
export const readJsonFile = async (path) => {
  try {
    return JSON.parse(await readTextFile(path));
  } catch {
    return undefined;
  }
};

/** @returns {string} */
export const commandDir = () => getCmdStdout("pwd")[0];

const readdir = (path = ".") => {
  const [files, err] = os.readdir(path);
  if (err) throw err;
  return files.filter((d) => d !== "." && d !== "..");
};

/** @returns {Promise<[boolean, string[]]>} */
export const tryReaddir = async (path = ".") => {
  try {
    return [true, readdir(path)];
  } catch {
    return [false, []];
  }
};

/** @returns {AsyncGenerator<string>} */
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
export const mkdir = async (path) => getCmdStdout("mkdir -p " + path);

/** @type {(path: string) => Promise<void>} */
export const rmdir = async (path) => getCmdStdout("rm -rf " + path);

/** @type {(from: string, to: string) => Promise<void>} */
export const copyFile = async (from, to) =>
  getCmdStdout("cp " + from + " " + to);

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
