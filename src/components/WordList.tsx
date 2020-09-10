import * as React from "react";
import { NumberWithWord } from "../plugins/NumberLanguagePlugins";

export type WordListProps = {
  readonly sortedWordsForNumbers: NumberWithWord[];
};

export function WordList(props: WordListProps) {
  return (
    <div className="List">
      Generated number words:
      {props.sortedWordsForNumbers.map((v) => (
        <ul key={v.value}>
          {v.value}: {v.numberAsWords}
        </ul>
      ))}
    </div>
  );
}
// 