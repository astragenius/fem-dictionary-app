import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "./components/searchbar/Searchbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import Error from "./components/Error/Error";
import "./index.scss";

function App() {
  const [fontType, setFontType] = useState("Sans-Serif");
  const [searchInput, setSearchInput] = useState("keyboard");
  const [isPending, setPending] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const dicData = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`
      );
      const resData = await dicData.data;
      setData(resData);
      setPending(true);
    } catch (error) {
      setPending(false);
    }
  };

  useEffect(() => {
    getData();
  }, [searchInput]);

  return (
    <div className={`container ff-${fontType}`}>
      <Header fontType={fontType} setFontType={setFontType} />
      <Searchbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setPending={setPending}
      />

      {isPending ? <MainContent data={data} /> : <Error />}
      <Footer />
    </div>
  );
}

export default App;
