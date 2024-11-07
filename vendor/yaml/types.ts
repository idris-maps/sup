export interface ParserOptions {
  /** string to be used as a file path in error/warning messages. */
  filename?: string;
  /** compatibility with JSON.parse behaviour. */
  json?: boolean;
}

export interface StringifyOptions {
  /** indentation width to use (in spaces). */
  indent?: number;
  /** when true, will not add an indentation level to array elements */
  noArrayIndent?: boolean;
  /**
   * do not throw on invalid types (like function in the safe schema)
   * and skip pairs and single values with such types.
   */
  skipInvalid?: boolean;
  /**
   * specifies level of nesting, when to switch from
   * block to flow style for collections. -1 means block style everywhere
   */
  flowLevel?: number;
  /**
   * If true, sort keys when dumping YAML in ascending, ASCII character order.
   * If a function, use the function to sort the keys. (default: false)
   * If a function is specified, the function must return a negative value
   * if first argument is less than second argument, zero if they're equal
   * and a positive value otherwise.
   */
  sortKeys?: boolean | ((a: string, b: string) => number);
  /** set max line width. (default: 80) */
  lineWidth?: number;
  /**
   * if true, don't convert duplicate objects
   * into references (default: false)
   */
  noRefs?: boolean;
  /**
   * if true don't try to be compatible with older yaml versions.
   * Currently: don't quote "yes", "no" and so on,
   * as required for YAML 1.1 (default: false)
   */
  noCompatMode?: boolean;
  /**
   * if true flow sequences will be condensed, omitting the
   * space between `key: value` or `a, b`. Eg. `'[a,b]'` or `{a:{b:c}}`.
   * Can be useful when using yaml for pretty URL query params
   * as spaces are %-encoded. (default: false).
   */
  condenseFlow?: boolean;
}
