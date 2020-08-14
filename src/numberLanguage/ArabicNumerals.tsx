import { NumberLanguagePlugin } from "../plugins/NumberLanguagePlugins";
import range from "./Range";

const ArabicNumerals: NumberLanguagePlugin = ({ start, end }) => {
  const numbers = range({ start, end });
  return numbers.map(String);
};
