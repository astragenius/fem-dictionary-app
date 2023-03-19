import React from "react";
import "./verbContent.scss";

function VerbContent() {
  return (
    <section className="verbSection">
      <article>
        <div className="section-divider">
          <h2 className="section-title ff-dynamic-18-24 fw-700">Verb</h2>
          <div className="divider" />
        </div>
        <span className="section-meaning fw-400">Meaning</span>
        <ul className="section-meaning-text ff-dynamic-14-18 fw-400">
          <li>To type on a computer keyboard.</li>
        </ul>
        <span>“Keyboarding is the part of this job I hate the most.”</span>
      </article>
      <div className="divider" />
    </section>
  );
}

export default VerbContent;
