import React from "react";
import "./header.scss";
import logo from "../../assets/images/logo.svg";
import RadioButton from "./RadioButton/RadioButton";
import DropDown from "./Dropdown/DropDown";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Dictionary web Logo" />
      </div>
      <div className="select-container">
        <div className="font-select-container">
          <DropDown />
        </div>
        <div className="theme-container">
          <RadioButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
