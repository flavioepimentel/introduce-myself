import React from "react";
import { Link } from "react-router-dom";
import coffe from "../midia/coffe.png";

import "../style/Home.css";

class Navbar extends React.Component {
  render() {
    return (
      <>
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
        <Link to={"/"}>
          <div className="coffe-div">
            <img className="coffe" src={coffe} alt="Marque um café" />
          </div>
        </Link>
        <nav className="navbar">
          <ul>
            <Link className="a-button" to={"/works"}>
              <li className="button">WORKS</li>
            </Link>
            <Link className="a-button" to={"/sobre"}>
              <li className="button">SOBRE</li>
            </Link>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
