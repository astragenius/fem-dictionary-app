import React, { useState } from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import "./searchbar.scss";

function Searchbar({ searchInput, setSearchInput, setPending }) {
  const [input, setInput] = useState("");
  const getInput = () => {
    setSearchInput(input);
    setPending(true);
  };

  return (
    <section className="searchBar-container dynamic-margin-bt">
      <label className="searchInput-label" htmlFor="searchInput">
        <input
          className="searchInput"
          placeholder="Search for any word..."
          type="text"
          name="searchInput"
          id="searchInput"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="searchBtn" type="button" onClick={getInput}>
          <img className="searchIcon" src={searchIcon} alt="" />
        </button>
      </label>
    </section>
  );
}

export default Searchbar;
