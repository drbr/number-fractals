import { PluginManager, BasePlugin } from "./PluginManager";
import {
  ArabicNumerals,
  NegativeNumerals,
} from "../numberLanguage/ArabicNumerals";

export type NumberLanguagePluginInput = {
  start: number;
  end: number;
};

export type NumberLanguagePluginOutput = ReadonlyArray<{
  value: number;
  numberAsWords: string;
}>;

export type GenerateWordsForNumbers = (
  input: NumberLanguagePluginInput
) => NumberLanguagePluginOutput;

/** Return the numbers from start to end, inclusive, in the language. */
export interface NumberLanguagePlugin extends BasePlugin {
  userVisibleName: string;
  generateWordsForNumbers: GenerateWordsForNumbers;
}

export const NumberLanguagePluginManager = new PluginManager<
  NumberLanguagePlugin
>(
  {
    registrationKey: "arabic",
    userVisibleName: "Arabic Numerals",
    generateWordsForNumbers: ArabicNumerals,
  },
  {
    registrationKey: "negative",
    userVisibleName: "Negative numbers",
    generateWordsForNumbers: NegativeNumerals,
  }
);

// TODO:
// Make a plugin manager for number languages,
// and put in Arabic numerals.
// Then show the results on the main page.
