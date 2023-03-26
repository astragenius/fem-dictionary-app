import React from "react";
import "./verbContent.scss";

function VerbContent({ verb }) {
  const getDefinition = verb.definitions.map((el) => <li>{el.definition}</li>);
  const getExample = verb.definitions.map((el) => el.example);
  return (
    <section className="verbSection">
      <article>
        <div className="section-divider dynamic-margin-bt-m">
          <h2 className="section-title ff-dynamic-18-24 fw-700">Verb</h2>
          <div className="divider" />
        </div>
        <h3 className="section-meaning fw-400">Meaning</h3>
        <ul className="list-style section-meaning-text ff-dynamic-14-18 fw-400 spacer">
          {getDefinition}
        </ul>
        <p className="section-meaning fw-500 dynamic-margin-block-start-m">
          " {getExample} "
        </p>
      </article>
      <div className="divider dynamic-margin-bt-m-block" />
    </section>
  );
}

export default VerbContent;
