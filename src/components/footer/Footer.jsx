import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer margin">
      <div>
        <p>
          FrontEnd Mentor:
          <a href="https://www.frontendmentor.io/profile/astragenius">
            Matthias
          </a>
        </p>
      </div>
      <div>
        <p>
          GitHub:
          <a href="https://github.com/astragenius">
            <BsGithub />
            Astragenius
          </a>
        </p>
      </div>
      <div>
        <p>
          Twitter:
          <a href="https://twitter.com/AstraKarl">
            <BsTwitter />
            Matthias
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
