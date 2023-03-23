import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "./components/searchbar/Searchbar";
// import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

import "./index.scss";

function App() {
  const [fontType, setFontType] = useState("Sans-Serif");
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`
      );

      setData(apiData.data);
    };
    fetchData();
    // make sure to catch any error
    // .catch(console.error);
  }, [searchInput]);

  return (
    <div className={`container ff-${fontType}`}>
      <Header fontType={fontType} setFontType={setFontType} />
      <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <MainContent data={data} />
    </div>
  );
}

export default App;
