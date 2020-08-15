import * as React from "react";
import "./App.css";
import { NumberLanguagePluginManager } from "./plugins/NumberLanguagePlugins";
import { Dropdown, adaptPluginToDropdownItems } from "./components/Dropdown";

const languagePlugins = NumberLanguagePluginManager;
const languagesDropdownItems = adaptPluginToDropdownItems(languagePlugins);

export function App() {
  const [currentLanguage, setCurrentLanguage] = React.useState(
    languagePlugins.getPluginsInOrder()[0]
  );

  return (
    <div className="App">
      <Dropdown
        label="Select a number language: "
        items={languagesDropdownItems}
        selectedValue={currentLanguage.userVisibleName}
        onChange={(value) =>
          setCurrentLanguage(languagePlugins.getPluginByKey(value)!)
        }
      />

      <div>
        Chosen selections:
        <ul>
          <li>Language: {currentLanguage.userVisibleName}</li>
        </ul>
      </div>
    </div>
  );
}
