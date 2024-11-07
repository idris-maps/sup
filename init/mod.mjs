// @ts-check
import { files } from "./files.mjs";
import { concatPaths, getFoldersAndFiles } from "../utils/mod.mjs";

export const foldersToCreate = ["assets", "data", "pages", "partials"];

/**
 * @param {import('../runtime/type.ts').Runtime} runtime
 * @param {string} [pathToFolder]
 * @param {boolean} [skipFiles]
 */
export const init = async (runtime, pathToFolder = ".", skipFiles) => {
  const folder = concatPaths(runtime.commandDir(), pathToFolder);
  const [exists] = await runtime.tryReaddir(folder);
  if (!exists) {
    await runtime.mkdir(pathToFolder.split(" ")[0]);
    console.log(`created folder "${pathToFolder}"`);
  }
  const { folders: existingFolders } = await getFoldersAndFiles(
    runtime,
    folder,
  );
  for (const toCreate of foldersToCreate) {
    if (existingFolders.includes(toCreate)) {
      continue;
    }
    const _folder = pathToFolder + "/" + toCreate;
    await runtime.mkdir(_folder.split(" ")[0]);
    console.log(`created folder "${pathToFolder + "/" + toCreate}"`);
  }
  if (!skipFiles) {
    for (const { path, content } of files) {
      await runtime.writeTextFile(pathToFolder + "/" + path, content);
    }
  }
};
