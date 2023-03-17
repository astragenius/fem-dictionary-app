import React from "react";
import "./dropDown.scss";

function DropDown() {
  return (
    <select name="font-select" id="">
      <option selected value="Sans Serif">
        Sans Serif
      </option>
      <option value="Serif">Serif</option>
      <option value="Mono">Mono</option>
    </select>
  );
}

export default DropDown;
