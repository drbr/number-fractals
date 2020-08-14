import range from "./Range";
import { GenerateWordsForNumbers } from "../plugins/NumberLanguagePlugins";

export const ArabicNumerals: GenerateWordsForNumbers = ({ start, end }) => {
  const numbers = range({ start, end });
  return numbers.map((x) => ({
    value: x,
    numberAsWords: String(x),
  }));
};

export const NegativeNumerals: GenerateWordsForNumbers = ({ start, end }) => {
  const numbers = range({ start, end });
  return numbers.map((x) => ({
    value: -x,
    numberAsWords: String(x),
  }));
};
