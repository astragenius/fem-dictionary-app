import React from "react";
import themeLogo from "../../../assets/images/icon-moon.svg";

function RadioButton() {
  return (
    <>
      <input type="checkbox" />
      <img src={themeLogo} alt="" />
    </>
  );
}

export default RadioButton;
