import React from "react";
import "./error.scss";

function Error() {
  return (
    <section>
      <div className="error-container">
        <p className="ff-dynamic-32-64">&#128577;</p>
        <h3 className="ff-dynamic-16-20 fw-700">No Definitions Found</h3>
        <p className="error-msg ff-dynamic-14-18">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </section>
  );
}

export default Error;
