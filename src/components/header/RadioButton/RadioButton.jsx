import React from "react";
import themeLogo from "../../../assets/images/icon-moon.svg";
import "./radioButton.scss";

function RadioButton() {
  return (
    <div className="checkBox-container">
      <input type="checkbox" />
      <img src={themeLogo} alt="" />
    </div>
  );
}

export default RadioButton;
