import * as React from "react";
import "./App.css";
import { NumberLanguagePluginManager } from "./plugins/NumberLanguagePlugins";
import { Dropdown, DropdownItem } from "./components/Dropdown";
import { BasePlugin, PluginManager } from "./plugins/PluginManager";

export function App() {
  const languageDropdownItems = adaptPluginToDropdownItems(
    NumberLanguagePluginManager
  );

  return (
    <div className="App">
      <Dropdown
        items={languageDropdownItems}
        label="Select a number language: "
      />

      <p>Can I see this?</p>
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
