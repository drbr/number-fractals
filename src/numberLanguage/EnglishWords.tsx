import range from "./Range";
import { GenerateWordsForNumbers } from "../plugins/NumberLanguagePlugins";
import { toWords } from "number-to-words";

export const EnglishWords: GenerateWordsForNumbers = ({ start, end }) => {
  const numbers = range({ start, end });
  return numbers.map((x) => ({
    value: x,
    numberAsWords: toWords(x),
  }));
};
