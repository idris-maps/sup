export interface Runtime {
  parseArgs: () => Record<string, string | boolean>;
  getArgs: () => string[];
  readTextFile: (path: string) => Promise<string | undefined>;
  writeTextFile: (path: string, text: string) => Promise<void>;
  readJsonFile: (path: string) => unknown;
  commandDir: () => string;
  tryReaddir: (path?: string) => Promise<[boolean, string[]]>;
  getFilesDeep: (path?: string | undefined) => AsyncGenerator<string>;
  mkdir: (path: string) => Promise<void>;
  rmdir: (path: string) => Promise<void>;
  copyFile: (from: string, to: string) => Promise<void>;
}
