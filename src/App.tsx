import * as React from "react";
import "./App.css";
import { NumberLanguagePluginManager } from "./plugins/NumberLanguagePlugins";
import { InputArea, InputAreaProps } from "./InputArea";
import { SortPluginManager } from "./plugins/SortPlugins";
import { GraphPluginManager } from "./plugins/GraphPlugins";
import { WordList } from "./components/WordList";

const languagePlugins = NumberLanguagePluginManager;
const sortPlugins = SortPluginManager;
const graphPlugins = GraphPluginManager;

const initialRangeStart = 1;
const initialRangeEnd = 100;

export function App() {
  const [rangeStart, setRangeStart] = React.useState(initialRangeStart);
  const [rangeEnd, setRangeEnd] = React.useState(initialRangeEnd);
  const [showList, setShowList] = React.useState(true);

  const [currentLanguagePlugin, setCurrentLanguagePlugin] = React.useState(
    languagePlugins.getPluginsInOrder()[0]
  );

  const [currentSortPlugin, setCurrentSortPlugin] = React.useState(
    sortPlugins.getPluginsInOrder()[0]
  );

  const [currentGraphPlugin, setCurrentGraphPlugin] = React.useState(
    graphPlugins.getPluginsInOrder()[0]
  );

  const sortedWordsForNumbers = React.useMemo(() => {
    const words = currentLanguagePlugin.generateWordsForNumbers({
      start: rangeStart,
      end: rangeEnd,
    });
    return currentSortPlugin.sortItemsInPlace(words);
  }, [currentLanguagePlugin, rangeStart, rangeEnd, currentSortPlugin]);

  const graphElement = React.useMemo(
    () => currentGraphPlugin.graphItems(sortedWordsForNumbers),
    [currentGraphPlugin, sortedWordsForNumbers]
  );

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
    showList,
    setShowList,
  };

  return (
    <div className="App">
      <div className="InputsSection">
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
      </div>

      <div className="Results">
        <WordList
          sortedWordsForNumbers={sortedWordsForNumbers}
          display={showList}
        />
        <div className="Graph">{graphElement}</div>
      </div>
    </div>
  );
}
