import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

import "./index.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
