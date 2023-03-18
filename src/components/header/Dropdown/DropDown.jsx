import React from "react";
import "./dropDown.scss";

function DropDown() {
  return (
    <div className="dropdown">
      <button type="button" className="dropbtn">
        Sans Serif
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeWidth="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </button>
      <div className="dropdown-content">
        <button type="button">Sans Serif</button>
        <button type="button">Serif</button>
        <button type="button">Mono</button>
      </div>
    </div>
  );
}

export default DropDown;
