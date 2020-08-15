import * as React from "react";
import "./App.css";
import {
  NumberLanguagePluginManager,
  NumberWithWord,
} from "./plugins/NumberLanguagePlugins";
import { InputArea, InputAreaProps } from "./InputArea";
import { SortPluginManager, SortPlugin } from "./plugins/SortPlugins";
import { GraphPluginManager } from "./plugins/GraphPlugins";

const languagePlugins = NumberLanguagePluginManager;
const sortPlugins = SortPluginManager;
const graphPlugins = GraphPluginManager;

const initialRangeStart = 1;
const initialRangeEnd = 10;

export function App() {
  const [rangeStart, setRangeStart] = React.useState(initialRangeStart);
  const [rangeEnd, setRangeEnd] = React.useState(initialRangeEnd);

  const [currentLanguagePlugin, setCurrentLanguagePlugin] = React.useState(
    languagePlugins.getPluginsInOrder()[0]
  );

  const [currentSortPlugin, setCurrentSortPlugin] = React.useState(
    sortPlugins.getPluginsInOrder()[0] as SortPlugin<NumberWithWord>
  );

  const [currentGraphPlugin, setCurrentGraphPlugin] = React.useState(
    graphPlugins.getPluginsInOrder()[0]
  );

  const sortedWordsForNumbers = React.useMemo(() => {
    const words = currentLanguagePlugin.generateWordsForNumbers({
      start: rangeStart,
      end: rangeEnd,
    });
    return currentSortPlugin.sortItemsInPlace(words, (w) => w.value);
  }, [currentLanguagePlugin, rangeStart, rangeEnd, currentSortPlugin]);

  const inputAreaProps: InputAreaProps = {
    languagePlugins,
    currentLanguagePlugin,
    setCurrentLanguagePlugin,
    sortPlugins,
    currentSortPlugin,
    setCurrentSortPlugin,
    graphPlugins,
    currentGraphPlugin,
    setCurrentGraphPlugin,
    rangeStart,
    setRangeStart,
    rangeEnd,
    setRangeEnd,
  };

  return (
    <div className="App">
      <InputArea {...inputAreaProps} />

      <div className="Chosen">
        Chosen selections:
        <ul>
          <li>Language: {currentLanguagePlugin.userVisibleName}</li>
          <li>
            Number range: [ {rangeStart}, {rangeEnd} ]
          </li>
          <li>Sort: {currentSortPlugin.userVisibleName}</li>
          <li>Graph library: {currentGraphPlugin.userVisibleName}</li>
        </ul>
      </div>

      <div className="Results">
        <div className="List">
          Generated number words:
          {sortedWordsForNumbers.map((v) => (
            <ul key={v.value}>
              {v.value}: {v.numberAsWords}
            </ul>
          ))}
        </div>
        <div className="Graph">Graph goes here!</div>
      </div>
    </div>
  );
}
