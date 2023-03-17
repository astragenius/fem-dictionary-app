import React from "react";
import Searchbar from "../searchbar/Searchbar";
import NounContent from "./NounContent/NounContent";
import VerbContent from "./VerbContent/VerbContent";

function MainContent() {
  return (
    <main>
      <Searchbar />
      <NounContent />
      <VerbContent />
    </main>
  );
}

export default MainContent;
