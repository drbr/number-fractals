export type NumberLanguagePluginInput = {
  start: number;
  end: number;
};

export type NumberLanguagePluginOutput = ReadonlyArray<{
  value: number;
  numberAsWords: string;
}>;

/** Return the numbers from start to end, inclusive, in the language. */
export type NumberLanguagePlugin = (
  input: NumberLanguagePluginInput
) => NumberLanguagePluginOutput;

// TODO:
// Make a plugin manager for number languages,
// and put in Arabic numerals.
// Then show the results on the main page.
