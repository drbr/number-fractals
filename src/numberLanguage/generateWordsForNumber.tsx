import range, { RangeParams } from "./Range";
import {
  GenerateEachNumberWord,
  NumberWithWord,
} from "../plugins/NumberLanguagePlugins";

export function generateWordsForNumbers(
  rangeParams: RangeParams,
  convertEachNumber: GenerateEachNumberWord
): NumberWithWord[] {
  const numbers = range(rangeParams);
  return numbers.map((x) => ({
    value: x,
    numberAsWords: convertEachNumber(x),
  }));
}
