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
    userVisibleName: "English (number-to-words)",
    generateEachNumberWord: toWords,
  },
  {
    registrationKey: "english (wn)",
    userVisibleName: "English (written-number)",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "en" }),
  },
  {
    registrationKey: "arabic",
    userVisibleName: "Arabic",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "ar" }),
  },
  {
    registrationKey: "esperanto",
    userVisibleName: "Esperanto",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "eo" }),
  },
  {
    registrationKey: "french",
    userVisibleName: "French",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "fr" }),
  },
  {
    registrationKey: "indonesian",
    userVisibleName: "Indonesian",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "id" }),
  },
  {
    registrationKey: "portuguese",
    userVisibleName: "Portuguese",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "ptPT" }),
  },
  {
    registrationKey: "spanish",
    userVisibleName: "Spanish",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "es" }),
  },
  {
    registrationKey: "turkish",
    userVisibleName: "Turkish",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "tr" }),
  },
  {
    registrationKey: "vietnamese",
    userVisibleName: "Vietnamese",
    generateEachNumberWord: (x) => writtenNumber(x, { lang: "vi" }),
  },
  {
    registrationKey: "arabic-numerals",
    userVisibleName: "Arabic Numerals",
    generateEachNumberWord: String,
  }
);
