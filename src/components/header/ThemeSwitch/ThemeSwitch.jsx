import React from "react";
import "./themeSwitch.scss";

function ThemeSwitch({setChecked}) {
  const testFuc = (e) => {
    setChecked(e.target.checked)
  } 
  return (
    <div className="checkBox-container margin-inline-8">
      <div className="flex margin-inline-end-12">
        <input
          className="checkbox"
          type="checkbox"
          id="themeSwitch"
          name="themeSwitch"
          onChange={testFuc}
        />
        <label className="checkbox-label" htmlFor="themeSwitch">
          <span className="visually-hidden">Toggle Switch</span>
        </label>
        <svg
          className="iconMoon margin-inline-12"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke="var(--clr-themeSwitch-bg)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default ThemeSwitch;
