import * as React from "react";
import "./App.css";
import { NumberLanguagePluginManager } from "./plugins/NumberLanguagePlugins";
import { PluginSelectorDropdown } from "./components/PluginSelectorDropdown";

const languagePlugins = NumberLanguagePluginManager;

export function App() {
  const [currentLanguagePlugin, setCurrentLanguagePlugin] = React.useState(
    languagePlugins.getPluginsInOrder()[0]
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
    </div>
  );
}
