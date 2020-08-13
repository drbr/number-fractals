import React from "react";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <label id="carsLabel">Choose a car: </label>
      <select name="cars" id="cars" aria-labelledby="carsLabel">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <p>Can I see this?</p>
    </div>
  );
}
