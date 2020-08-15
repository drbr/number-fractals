import * as React from "react";
import "./App.css";
import { NumberLanguagePluginManager } from "./plugins/NumberLanguagePlugins";
import { PluginSelectorDropdown } from "./components/PluginSelectorDropdown";
import { generateUniqueId } from "./utils/generateId";

const languagePlugins = NumberLanguagePluginManager;

const initialRangeStart = 1;
const initialRangeEnd = 10;

export function App() {
  const startLabelId = React.useMemo(() => generateUniqueId(), []);
  const endLabelId = React.useMemo(() => generateUniqueId(), []);
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

  return (
    <div className="App">
      <div className="Selectors">
        <PluginSelectorDropdown
          label="Language: "
          pluginManager={languagePlugins}
          selectedPlugin={currentLanguagePlugin}
          onChange={setCurrentLanguagePlugin}
        />

        <label id={startLabelId}>Start value:</label>
        <input
          aria-labelledby={startLabelId}
          type="number"
          step={1}
          value={rangeStart}
          onChange={(event) => setRangeStart(Number(event.target.value))}
        />

        <label id={endLabelId}>End value:</label>
        <input
          aria-labelledby={endLabelId}
          type="number"
          step={10}
          value={rangeEnd}
          onChange={(event) => setRangeEnd(Number(event.target.value))}
        />
      </div>

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
