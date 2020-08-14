import * as React from "react";
import { generateUniqueId } from "../utils/generateId";

export type DropdownProps = {
  label: string;
  items: ReadonlyArray<{
    value: string;
    name: string;
  }>;
};

export function Dropdown(props: DropdownProps) {
  const uniqueId = React.useMemo(() => generateUniqueId(), []);

  return (
    <div>
      <label id={uniqueId + "-label"}>{props.label}</label>
      <select id={uniqueId} aria-labelledby={uniqueId + "-label"}>
        {props.items.map((item) => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
