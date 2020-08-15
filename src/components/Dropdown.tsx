import * as React from "react";
import { generateUniqueId } from "../utils/generateId";
import { BasePlugin, PluginManager } from "../plugins/PluginManager";

export type DropdownItem = {
  value: string;
  name: string;
};

export type DropdownProps = {
  label: string;
  items: ReadonlyArray<DropdownItem>;
  selectedValue: string;
  onChange: (value: string) => void;
};

export function Dropdown(props: DropdownProps) {
  const uniqueId = React.useMemo(() => generateUniqueId(), []);

  return (
    <div>
      <label id={uniqueId + "-label"}>{props.label}</label>
      <select
        id={uniqueId}
        aria-labelledby={uniqueId + "-label"}
        onChange={(event) => props.onChange(event.target.value)}
        value={props.selectedValue}
      >
        {props.items.map((item) => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

type DropdownCompatiblePlugin = BasePlugin & { userVisibleName: string };

export function adaptPluginToDropdownItems(
  plugins: PluginManager<DropdownCompatiblePlugin>
): ReadonlyArray<DropdownItem> {
  return plugins.getPluginsInOrder().map((p) => ({
    value: p.registrationKey,
    name: p.userVisibleName,
  }));
}
