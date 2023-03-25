import React from "react";

import ContentTitle from "./ContentTitle/ContentTitle";
import NounContent from "./NounContent/NounContent";
import SourceLink from "./SourceLink/SourceLink";
import VerbContent from "./VerbContent/VerbContent";

function MainContent({ data }) {
  
  const searchData = data[0];
  
  const { word, phonetic } = searchData;
  const { meanings } = searchData;
  const [noun, verb] = meanings;

  return (
    <main>
      <ContentTitle word={word} phonetic={phonetic} />
      <NounContent noun={noun}/>
      <VerbContent verb={verb}/>
      <SourceLink />
    </main>
  );
 

}

export default MainContent;
