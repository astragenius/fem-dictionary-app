import React from "react";

import ContentTitle from "./ContentTitle/ContentTitle";
import NounContent from "./NounContent/NounContent";
import SourceLink from "./SourceLink/SourceLink";
import VerbContent from "./VerbContent/VerbContent";

function MainContent({ data }) {
  const searchData = data[0];
  console.log(searchData);
  const { word, phonetic } = searchData;
  const { meanings } = searchData;
  console.log(meanings);

  return (
    <main>
      <ContentTitle word={word} phonetic={phonetic} />
      <NounContent />
      <VerbContent />
      <SourceLink />
    </main>
  );
}

export default MainContent;
