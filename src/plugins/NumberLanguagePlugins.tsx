import { PluginManager, BasePlugin } from "./PluginManager";
import { ArabicNumerals } from "../numberLanguage/ArabicNumerals";
import { EnglishWords } from "../numberLanguage/EnglishWords";
import { RangeParams } from "../numberLanguage/Range";

export type NumberWithWord = {
  value: number;
  numberAsWords: string;
};

export type GenerateWordsForNumbers = (input: RangeParams) => NumberWithWord[];

/** Return the numbers from start to end, inclusive, in the language. */
export interface NumberLanguagePlugin extends BasePlugin {
  generateWordsForNumbers: GenerateWordsForNumbers;
}

export const NumberLanguagePluginManager = new PluginManager<
  NumberLanguagePlugin
>(
  {
    registrationKey: "english",
    userVisibleName: "English Words",
    generateWordsForNumbers: EnglishWords,
  },
  {
    registrationKey: "arabic",
    userVisibleName: "Arabic Numerals",
    generateWordsForNumbers: ArabicNumerals,
  }
);
