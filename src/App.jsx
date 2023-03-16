import React from "react";
import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";

import "./index.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Searchbar />
    </div>
  );
}

export default App;
