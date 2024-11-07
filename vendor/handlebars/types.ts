export interface CompileOptions {
  data?: boolean;
  compat?: boolean;
  knownHelpers?: KnownHelpers;
  knownHelpersOnly?: boolean;
  noEscape?: boolean;
  strict?: boolean;
  assumeObjects?: boolean;
  preventIndent?: boolean;
  ignoreStandalone?: boolean;
  explicitPartialContext?: boolean;
}

export type KnownHelpers = {
  [name in BuiltinHelperName | CustomHelperName]: boolean;
};

export type BuiltinHelperName =
  | "helperMissing"
  | "blockHelperMissing"
  | "each"
  | "if"
  | "unless"
  | "with"
  | "log"
  | "lookup";

export type CustomHelperName = string;

export type HbsCompile = (
  template: string,
  options?: CompileOptions,
) => (data: Record<string, unknown>) => string;
