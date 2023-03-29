import React, { useState } from "react";
import searchIcon from "../../assets/images/icon-search.svg";
import "./searchbar.scss";

function Searchbar({ searchInput, setSearchInput, setPending }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const getInput = () => {
    if (input === "") {
      setError(true);
    } else {
      setError(false);
      setSearchInput(input);
      setPending(true);
    }
  };

  return (
    <section className="searchBar-container dynamic-margin-bt">
      <label
        className={`searchInput-label ${error && "invalid"}`}
        htmlFor="searchInput"
      >
        <input
          className="searchInput"
          placeholder="Search for any word..."
          type="text"
          name="searchInput"
          id="searchInput"
          autoFocus="true"
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="searchBtn" type="button" aria-labelledby="searchInput" onClick={getInput}>
          <img className="searchIcon" src={searchIcon} alt="" />
        </button>
      </label>
      {error && (
        <span className="inputError ff-dynamic-16-20">
          Whoops, can't be empty...
        </span>
      )}
    </section>
  );
}

export default Searchbar;
