import "./style/App.css";
import Home from "./pages/Home";
const introvideo = require("./midia/introvideo.mp4");

function App() {
  return (
    <>
      <div className="App">
        <div className="video-containier">
          <video
            className="introvideo"
            src={introvideo}
            width="100%"
            height="auto"
            autoPlay
            volume={0}
            muted
            loop
            playsinline
          />
        </div>
        <header>
          <div className="links">
            <ul className="links">
              <li>
                <a
                  target="_blank"
                  href="https://wa.me/message/RMPN3E5VLSP4L1"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/flavioepimentel/"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
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
        <navbar>
          <ul>
            <li className="button">
              <a className='a-button' href="#">
                WORKS
              </a>
            </li>
            <li className="button">
              <a className='a-button' href="#">
                SOBRE
              </a>
            </li>
          </ul>
        </navbar>
        <Home />
      </div>
    </>
  );
}

export default App;
