// @ts-check

/**
 * @typedef {import('../runtime/type.ts').Runtime} Runtime
 */

/**
 * @param {string} base
 * @param {string} relative
 * @returns {string}
 */
export const concatPaths = (base, relative) => {
  const baseParts = base.split("/").filter((d) => d !== "" && d !== ".");
  const relativeParts = relative.split("/").filter((d) =>
    d !== "" && d !== "."
  );
  while (relativeParts.length > 1) {
    const part = relativeParts.shift();
    if (part === "..") {
      if (!baseParts || baseParts.every((d) => d === "..")) {
        baseParts.push("..");
      } else {
        baseParts.pop();
      }
    } else if (part) {
      baseParts.push(part);
    }
  }
  const path = (base.startsWith("/") && baseParts[0] !== ".." ? "/" : "") +
    [...baseParts, relativeParts[0]].join("/");
  return path.endsWith("/") ? path.slice(0, -1) : path;
};

/**
 * @param {string} path
 * @returns {{ ext?:string, filename: string, folder?: string, withoutExt: string }}
 */
export const getFileInfo = (path) => {
  const filename = path.split("/").slice(-1)[0];
  let folder = path.slice(0, -(filename.length));
  if (folder === "") {
    folder = "/";
  }
  const parts = (filename || "").split(".");
  const ext = parts.length > 1 ? parts.slice(-1)[0] : undefined;
  const withoutExt = ext ? filename.slice(0, -(ext.length + 1)) : filename;
  return { folder, filename, ext, withoutExt };
};

/**
 * @param {Runtime} runtime
 * @param {string} mainFolder
 */
export const wipeDist = async (runtime, mainFolder) => {
  const folder = (mainFolder + "/dist").split(" ")[0];
  await runtime.rmdir(folder);
  console.log(`deleted "${folder}"`);
  await runtime.mkdir(folder);
  console.log(`created "${folder}"`);
};

/**
 * @param {Runtime} runtime
 * @param {string} mainFolder
 */
export const copyAssetsToDist = async (runtime, mainFolder) => {
  const folder = (mainFolder + "/assets").split(" ")[0];
  const destinationFolder = (mainFolder + "/dist/assets").split(" ")[0];
  for await (const file of runtime.getFilesDeep(folder)) {
    const from = file;
    const to = file.replace(folder, destinationFolder);
    const toDir = to.split("/").slice(0, -1).join("/");
    await runtime.mkdir(toDir);
    await runtime.copyFile(from, to);
  }
  console.log(`copied assets to "${destinationFolder}"`);
};

/**
 * @param {Runtime} runtime
 * @param {string} path
 * @returns {Promise<{files:string[],folders:string[]}>}
 */
export const getFoldersAndFiles = async (runtime, path = ".") => {
  const folders = [];
  const files = [];
  const [isFolder, _files] = await runtime.tryReaddir(path);
  if (isFolder) {
    for (const file of _files) {
      const [_isFolder] = await runtime.tryReaddir(path + "/" + file);
      if (_isFolder) folders.push(file);
      else files.push(file);
    }
  } else {
    files.push(path);
  }
  return { folders, files };
};
