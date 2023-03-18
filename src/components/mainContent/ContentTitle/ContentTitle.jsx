import React from "react";
import "./contentTitle.scss";

function ContentTitle() {
  return (
    <section className="contentTitle">
      <div className="title">
        <h1>keyboard</h1>
        <p>/ˈkiːbɔːd/</p>
      </div>
      <div className="audio">
        <button className="audioButton" type="button">
          <svg
            className="audioIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g fill="var(--icon-color)" fillRule="evenodd">
              <circle
                fill="var(--icon-bg)"
                cx="37.5"
                cy="37.5"
                r="37.5"
                opacity="var(--icon-opacity)"
              />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ContentTitle;
