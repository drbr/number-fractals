import * as React from "react";
import "./App.css";
import { NumberLanguagePluginManager } from "./plugins/NumberLanguagePlugins";
import { Dropdown, DropdownItem } from "./components/Dropdown";
import { BasePlugin, PluginManager } from "./plugins/PluginManager";

export function App() {
  const { languagesPlugin, languagesDropdownItems } = React.useMemo(
    getPlugins,
    []
  );

  const [language, setLanguage] = React.useState(
    languagesPlugin.getPluginsInOrder()[0].registrationKey
  );

  function callback(value: string) {
    setLanguage(value);
  }

  return (
    <div className="App">
      <Dropdown
        label="Select a number language: "
        items={languagesDropdownItems}
        selectedValue={language}
        onChange={callback}
      />

      <div>
        Chosen selections:
        <ul>
          <li>
            Language:
            {languagesPlugin.getPluginByKey(language)?.userVisibleName}
          </li>
        </ul>
      </div>
    </div>
  );
}

type DropdownCompatiblePlugin = BasePlugin & { userVisibleName: string };

function adaptPluginToDropdownItems(
  plugins: PluginManager<DropdownCompatiblePlugin>
): ReadonlyArray<DropdownItem> {
  return plugins.getPluginsInOrder().map((p) => ({
    value: p.registrationKey,
    name: p.userVisibleName,
  }));
}

function getPlugins() {
  const languagesPlugin = NumberLanguagePluginManager;
  const languagesDropdownItems = adaptPluginToDropdownItems(languagesPlugin);

  const chosenNumberRange = { start: 1, end: 10 };

  return {
    languagesPlugin,
    languagesDropdownItems,
    chosenNumberRange,
  };
}
