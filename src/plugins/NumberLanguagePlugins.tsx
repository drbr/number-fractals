/** Return the numbers from start to end, inclusive, in the language. */
export type NumberLanguagePlugin = (params: {
  start: number;
  end: number;
}) => ReadonlyArray<string>;
