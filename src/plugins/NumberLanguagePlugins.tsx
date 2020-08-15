import { PluginManager, BasePlugin } from "./PluginManager";
import { ArabicNumerals } from "../numberLanguage/ArabicNumerals";
import { EnglishWords } from "../numberLanguage/EnglishWords";

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
    registrationKey: "english",
    userVisibleName: "English Words",
    generateWordsForNumbers: EnglishWords,
  }
);
