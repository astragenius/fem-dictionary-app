import React from "react";
import "./header.scss";
import logo from "../../assets/images/logo.svg";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import DropDown from "./Dropdown/DropDown";

function Header() {
  return (
    <header className="header-container dynamic-margin-28-50">
      <div className="logo-container">
        <img src={logo} alt="Dictionary web Logo" />
      </div>
      <div className="select-container">
        <div className="font-select-container">
          <DropDown />
        </div>
        <div className="theme-container">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Header;
