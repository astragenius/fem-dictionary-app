import React from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import "./searchbar.scss";

function Searchbar() {
  return (
    <div className="searchBar-container">
      <label className="searchInput-label" htmlFor="searchInput">
        <input
          className="searchInput"
          placeholder="Search for any word..."
          type="text"
          name="searchInput"
          id="searchInput"
        />
        <img className="searchIcon" src={searchIcon} alt="" />
      </label>
    </div>
  );
}

export default Searchbar;
