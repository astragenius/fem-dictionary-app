import React from "react";
import "./styles.scss";
import logo from "../../assets/images/logo.svg";
import themeLogo from "../../assets/images/icon-moon.svg";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Dictionary web Logo" />
      </div>
      <div className="select-container">
        <div className="font-select-container">
          <select name="font-select" id="">
            <option selected value="Sans Serif">
              Sans Serif
            </option>
            <option value="Serif">Serif</option>
            <option value="Mono">Mono</option>
          </select>
        </div>
        <div className="theme-container">
          <input type="checkbox" />
          <img src={themeLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
