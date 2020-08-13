import React from "react";
import "./App.css";
import { generateUniqueId } from "./utils/generateId";

export function App() {
  return (
    <div className="App">
      <Dropdown items={CarsItems} label="Select a car: " />

      <p>Can I see this?</p>
    </div>
  );
}

const CarsItems: DropdownProps["items"] = [
  {
    value: "volvo",
    name: "Volvo",
  },
  {
    value: "audi",
    name: "Audi",
  },
  {
    value: "ford",
    name: "Ford",
  },
];

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
