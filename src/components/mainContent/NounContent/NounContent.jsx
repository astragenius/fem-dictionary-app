import React from "react";
import "./nounContent.scss";

function NounContent({noun}) {

   console.log(noun.synonyms)
  
  const getDefinition = noun.definitions.map((el) => <li>{el.definition}</li>)
  
  return (
    <section className="nounSection">
      <article>
        <div className="section-divider dynamic-margin-bt-m">
          <h2 className="section-title ff-dynamic-18-24 fw-700">noun</h2>
          <div className="divider" />
        </div>
        <div>
          <h3 className="section-meaning fw-400">Meaning</h3>
          <ul className="list-style section-meaning-text ff-dynamic-14-18 fw-500 spacer">
            {getDefinition}
            {/* <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li> */}
          </ul>
          <div className="flex flex-gap-1 dynamic-margin-bt-m-block">
            <span className="section-meaning fw-400">Synonyms:</span>
            <span className="synonym-text fw-700 ff-dynamic-16-20">
              {noun.synonyms.length > 0 ? noun.synonyms : 'No synonyms'}
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default NounContent;
