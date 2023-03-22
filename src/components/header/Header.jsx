import React, { useState, useEffect } from "react";
import "./header.scss";
import logo from "../../assets/images/logo.svg";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import DropDown from "./Dropdown/DropDown";

function Header({ fontType, setFontType }) {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    const root = document.querySelector(":root");

    if (isChecked === true) {
      root.classList.toggle("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }, [isChecked]);

  return (
    <header className="header-container dynamic-margin-28-50">
      <div className="logo-container">
        <img src={logo} alt="Dictionary web Logo" />
      </div>
      <div className="select-container">
        <div className="font-select-container">
          <DropDown fontType={fontType} setFontType={setFontType} />
        </div>
        <div className="theme-container">
          <ThemeSwitch setChecked={setChecked} />
        </div>
      </div>
    </header>
  );
}

export default Header;
