import { NumberLanguagePlugin } from "../plugins/NumberLanguagePlugins";
import range from "./Range";

export const ArabicNumerals: NumberLanguagePlugin = ({ start, end }) => {
  const numbers = range({ start, end });
  return numbers.map((x) => ({
    value: x,
    numberAsWords: String(x),
  }));
};
