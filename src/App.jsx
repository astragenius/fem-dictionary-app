import React, { useState } from "react";

// import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

import "./index.scss";

function App() {
  const [fontType, setFontType] = useState("Sans-Serif");

  return (
    <div className={`container ff-${fontType}`}>
      <Header fontType={fontType} setFontType={setFontType} />
      <MainContent />
    </div>
  );
}

export default App;
