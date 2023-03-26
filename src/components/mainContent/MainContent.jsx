import React from "react";

import ContentTitle from "./ContentTitle/ContentTitle";
import NounContent from "./NounContent/NounContent";
import SourceLink from "./SourceLink/SourceLink";
import VerbContent from "./VerbContent/VerbContent";

function MainContent({ data }) {
  const searchData = data[0];
  console.log(searchData);
  const { word, phonetics } = searchData;
  const { meanings } = searchData;
  const [noun, verb] = meanings;

  return (
    <main>
      <ContentTitle word={word} phonetics={phonetics} />

      {noun === undefined ? null : <NounContent noun={noun} />}
      {verb === undefined ? null : <VerbContent verb={verb} />}

      <SourceLink data={data} />
    </main>
  );
}

export default MainContent;
