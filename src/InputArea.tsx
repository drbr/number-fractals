import * as React from "react";
import { PluginSelectorDropdown } from "./components/PluginSelectorDropdown";
import {
  NumberLanguagePluginManager,
  NumberLanguagePlugin,
} from "./plugins/NumberLanguagePlugins";
import { generateUniqueId } from "./utils/generateId";

export type InputAreaProps = {
  languagePlugins: typeof NumberLanguagePluginManager;
  currentLanguagePlugin: NumberLanguagePlugin;
  setCurrentLanguagePlugin: React.Dispatch<
    React.SetStateAction<NumberLanguagePlugin>
  >;
  rangeStart: number;
  setRangeStart: React.Dispatch<React.SetStateAction<number>>;
  rangeEnd: number;
  setRangeEnd: React.Dispatch<React.SetStateAction<number>>;
};

export function InputArea(props: InputAreaProps) {
  const startLabelId = React.useMemo(() => generateUniqueId(), []);
  const endLabelId = React.useMemo(() => generateUniqueId(), []);

  return (
    <div className="Selectors">
      <PluginSelectorDropdown
        label="Language: "
        pluginManager={props.languagePlugins}
        selectedPlugin={props.currentLanguagePlugin}
        onChange={props.setCurrentLanguagePlugin}
      />

      <label id={startLabelId}>Start value:</label>
      <input
        aria-labelledby={startLabelId}
        type="number"
        step={1}
        value={props.rangeStart}
        onChange={(event) => props.setRangeStart(Number(event.target.value))}
      />

      <label id={endLabelId}>End value:</label>
      <input
        aria-labelledby={endLabelId}
        type="number"
        step={10}
        value={props.rangeEnd}
        onChange={(event) => props.setRangeEnd(Number(event.target.value))}
      />
    </div>
  );
}
