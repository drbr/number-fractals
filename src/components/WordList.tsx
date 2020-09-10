import * as React from "react";
import { NumberWithWord } from "../plugins/NumberLanguagePlugins";

export type WordListProps = {
  readonly display: boolean;
  readonly sortedWordsForNumbers: NumberWithWord[];
};

export function WordList(props: WordListProps) {
  if (!props.display) return null;
  return <WordListDisplay {...props} />;
}

function WordListDisplay(props: WordListProps) {
  const listItems = React.useMemo(
    () =>
      props.sortedWordsForNumbers.map((v) => (
        <ul key={v.value}>
          {v.value}: {v.numberAsWords}
        </ul>
      )),
    [props.sortedWordsForNumbers]
  );

  return (
    <div className="List">
      Generated number words:
      {listItems}
    </div>
  );
}
