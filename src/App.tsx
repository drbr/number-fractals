import * as React from "react";
import "./App.css";
import { NumberLanguagePluginManager } from "./plugins/NumberLanguagePlugins";

export function App() {
  return (
    <div className="App">
      <Dropdown items={CarsItems} label="Select a number language: " />

      <p>Can I see this?</p>
    </div>
  );
}
