import * as React from "react";
import "./App.css";
import { NumberLanguagePluginManager } from "./plugins/NumberLanguagePlugins";
import { PluginSelectorDropdown } from "./components/PluginSelectorDropdown";
import { generateUniqueId } from "./utils/generateId";
import { InputArea, InputAreaProps } from "./InputArea";

const languagePlugins = NumberLanguagePluginManager;

const initialRangeStart = 1;
const initialRangeEnd = 10;

export function App() {
  const [rangeStart, setRangeStart] = React.useState(initialRangeStart);
  const [rangeEnd, setRangeEnd] = React.useState(initialRangeEnd);

  const [currentLanguagePlugin, setCurrentLanguagePlugin] = React.useState(
    languagePlugins.getPluginsInOrder()[0]
  );

  const wordsForNumbers = React.useMemo(
    () =>
      currentLanguagePlugin.generateWordsForNumbers({
        start: rangeStart,
        end: rangeEnd,
      }),
    [currentLanguagePlugin, rangeStart, rangeEnd]
  );

  const inputAreaProps: InputAreaProps = {
    languagePlugins,
    currentLanguagePlugin,
    setCurrentLanguagePlugin,
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
        </ul>
      </div>

      <div className="Results">
        Generated number words:
        {wordsForNumbers.map((v) => (
          <ul key={v.value}>
            {v.value}: {v.numberAsWords}
          </ul>
        ))}
      </div>
    </div>
  );
}
