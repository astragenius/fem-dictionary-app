import React from "react";
import Searchbar from "../searchbar/Searchbar";
import ContentTitle from "./ContentTitle/ContentTitle";
import NounContent from "./NounContent/NounContent";
import VerbContent from "./VerbContent/VerbContent";

function MainContent() {
  return (
    <main>
      <Searchbar />
      <ContentTitle />
      <NounContent />
      <VerbContent />
    </main>
  );
}

export default MainContent;
