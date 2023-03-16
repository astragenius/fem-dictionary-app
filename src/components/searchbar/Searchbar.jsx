import React from "react";
import searchIcon from "../../assets/images/icon-search.svg";

function Searchbar() {
  return (
    <div>
      <div className="input-container">
        <input
          placeholder="Search for any word..."
          type="text"
          name="searchInput"
        />
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}

export default Searchbar;
