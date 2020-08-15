import * as React from "react";
import "./App.css";
import { NumberLanguagePluginManager } from "./plugins/NumberLanguagePlugins";
import { PluginSelectorDropdown } from "./components/PluginSelectorDropdown";

const languagePlugins = NumberLanguagePluginManager;

const numberRange = { start: 1, end: 20 };

export function App() {
  const [currentLanguagePlugin, setCurrentLanguagePlugin] = React.useState(
    languagePlugins.getPluginsInOrder()[0]
  );

  const wordsForNumbers = currentLanguagePlugin.generateWordsForNumbers(
    numberRange
  );

  return (
    <div className="App">
      <PluginSelectorDropdown
        label="Select a number language: "
        pluginManager={languagePlugins}
        selectedPlugin={currentLanguagePlugin}
        onChange={setCurrentLanguagePlugin}
      />

      <div>
        Chosen selections:
        <ul>
          <li>Language: {currentLanguagePlugin.userVisibleName}</li>
        </ul>
      </div>

      <div>
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
