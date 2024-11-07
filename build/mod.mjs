// @ts-check
import { concatPaths, copyAssetsToDist, wipeDist } from "../utils/mod.mjs";
import { getGlobalData } from "./data.mjs";
import { writePages } from "./pages.mjs";
import { foldersToCreate, init } from "../init/mod.mjs";

/** @param {string} pathToFolder */
const notInitError = (pathToFolder) => `
  "${pathToFolder}" has not been initialized, run the "init" command first
`;

/**
 * @param {import('../runtime/type.ts').Runtime} runtime
 * @param {string} [pathToFolder]
 * @param {boolean} [isDev]
 */
export const build = async (runtime, pathToFolder = ".", isDev = false) => {
  const mainFolder = concatPaths(runtime.commandDir(), pathToFolder);
  const [folderExists, folderContent] = await runtime.tryReaddir(mainFolder);
  if (
    !folderExists || !foldersToCreate.every((d) => folderContent.includes(d))
  ) {
    console.log(notInitError(pathToFolder));
    return;
  }
  await init(runtime, pathToFolder, true);
  await wipeDist(runtime, mainFolder);
  const globalData = await getGlobalData(runtime, pathToFolder);
  await writePages(runtime, { globalData, mainFolder, isDev });
  await copyAssetsToDist(runtime, mainFolder);
};
