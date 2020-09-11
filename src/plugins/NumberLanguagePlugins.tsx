import { PluginManager, BasePlugin } from "./PluginManager";
import writtenNumber from "written-number";
import { toWords } from "number-to-words";

export type NumberWithWord = {
  value: number;
  numberAsWords: string;
};

export type GenerateEachNumberWord = (num: number) => string;

/** Return the numbers from start to end, inclusive, in the language. */
export interface NumberLanguagePlugin extends BasePlugin {
  generateEachNumberWord: GenerateEachNumberWord;
}

export const NumberLanguagePluginManager = new PluginManager<
  NumberLanguagePlugin
>(
  {
    registrationKey: "english (n2w)",
    userVisibleName: "English Words (number-to-words)",
    generateEachNumberWord: toWords,
  },
  {
    registrationKey: "french",
    userVisibleName: "French Words (written-number)",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "fr" }),
  },
  {
    registrationKey: "arabic-numerals",
    userVisibleName: "Arabic Numerals",
    generateEachNumberWord: String,
  }
);
