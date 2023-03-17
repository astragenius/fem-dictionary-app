import React from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import "./searchbar.scss";

function Searchbar() {
  return (
    <div className="searchBar-container">
      <input
        placeholder="Search for any word..."
        type="text"
        name="searchInput"
      />
      <img src={searchIcon} alt="" />
    </div>
  );
}

export default Searchbar;
