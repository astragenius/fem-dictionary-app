import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "./components/searchbar/Searchbar";
// import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

import "./index.scss";
import Fail from "./components/Fail/Fail";

function App() {
  const [fontType, setFontType] = useState("Sans-Serif");
  const [searchInput, setSearchInput] = useState("napkin");
  const [isPending, setPending] = useState(false)
  const [data, setData] = useState([]);
  
  const getData = async () => {
    

      const dicData = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`);
      const resData = await dicData.data
      
      if(!resData) {
        console.log('no data')
      } else {
        setData(resData)
        setPending(true)
      }

   
  }
  
  useEffect(() => {

    getData()
    
  }, [searchInput])
  console.log(data)
  return (
    <div className={`container ff-${fontType}`}>
      <Header fontType={fontType} setFontType={setFontType} />
      <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} setPending={setPending}/>
      {isPending ? <MainContent data={data}/> : <Fail/>}
    </div>
  );
}

export default App;
