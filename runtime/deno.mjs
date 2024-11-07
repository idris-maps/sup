/** @returns {Record<string,string|boolean>} */
export const parseArgs = () =>
  Deno.args
    .filter((d) => d.startsWith("--"))
    .reduce(
      (r, d) => {
        const [arg, value] = d.split("=");
        return { ...r, [arg.substring(2)]: value || true };
      },
      {},
    );

/** @returns {string[]} */
export const getArgs = () => Deno.args;

/** @type {(path: string) => Promise<string|undefined>} */
export const readTextFile = (path) => {
  try {
    return Deno.readTextFile(path);
  } catch {
    return undefined;
  }
};

/** @type {(path: string, text: string) => Promise<void>} */
export const writeTextFile = (path, text) => Deno.writeTextFile(path, text);

/** @type {(path: string) => unknown} */
export const readJsonFile = async (path) => {
  try {
    return JSON.parse(await readTextFile(path));
  } catch {
    return undefined;
  }
};

/** @returns {string} */
export const commandDir = () => Deno.cwd();

/** @type {(path?: string) => Promise<[boolean,string[]]>} */
export const tryReaddir = async (path = ".") => {
  try {
    const files = [];
    for await (const d of Deno.readDir(path)) {
      if (d.isFile || d.isDirectory) {
        files.push(d.name);
      }
    }
    return [true, files];
  } catch {
    return [false, []];
  }
};

/** @type {(path?: string) => AsyncGenerator<['file'|'folder', string]>} */
const tryReaddirGen = async function* (path = ".") {
  try {
    for await (const d of Deno.readDir(path)) {
      if (d.isFile) {
        yield ["file", d.name];
      }
      if (d.isDirectory) {
        yield ["folder", d.name];
      }
    }
  } catch {
    return;
  }
};

/**
 * @param {string} [path]
 * @returns {AsyncGenerator<string>}
 */
export const getFilesDeep = async function* (path = ".") {
  for await (const [type, name] of tryReaddirGen(path)) {
    if (type === "file") {
      yield path + "/" + name;
    }
    if (type === "folder") {
      for await (const file of getFilesDeep(path + "/" + name)) {
        yield file;
      }
    }
  }
};

/** @type {(path: string) => Promise<void>} */
export const mkdir = (path) => Deno.mkdir(path, { recursive: true });

/** @type {(path: string) => Promise<void>} */
export const rmdir = async (path) => {
  const [exists] = await tryReaddir(path);
  if (exists) {
    await Deno.remove(path, { recursive: true });
  }
};

/** @type {(from: string, to: string) => Promise<void>} */
export const copyFile = (from, to) => Deno.copyFile(from, to);

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
