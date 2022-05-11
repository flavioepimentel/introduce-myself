import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import Video from "./video";


class NavVideo extends React.Component {
  render() {
    return (
      <>
      <Video />
        <header>
          <div className="links">
            <ul className="ul-links">
              <li className="li-links">
                <a
                  className="link-contact"
                  target="_blank"
                  href="https://wa.me/message/RMPN3E5VLSP4L1"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li className="li-links">
                <a
                  className="link-contact"
                  target="_blank"
                  href="https://www.linkedin.com/in/flavioepimentel/"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li className="li-links">
                <a
                  className="link-contact"
                  target="_blank"
                  href="https://github.com/flavioepimentel"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </header>
        <nav className="navbar">
          <ul>
            <li className="button">
              <Link className="a-button" to={"/works"}>
                WORKS
              </Link>
            </li>
            <li className="button">
              <Link className="a-button" to={"/sobre"}>
                SOBRE
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavVideo;
