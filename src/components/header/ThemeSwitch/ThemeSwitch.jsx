import React from "react";
import themeLogo from "../../../assets/images/icon-moon.svg";
import "./themeSwitch.scss";

function ThemeSwitch() {
  return (
    <div className="checkBox-container">
      <input type="checkbox" />
      <img src={themeLogo} alt="" />
    </div>
  );
}

export default ThemeSwitch;
