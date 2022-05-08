import React from "react";
import "../style/Home.css";

const introvideo = require("../midia/introvideo.mp4");
const post = require("../midia/post.png");

class Video extends React.Component {
  render() {
    return (
      <div className="video-containier">
        <video
          className="introvideo"
          poster={post}
          autoPlay
          volume={0}
          muted
          loop
          playsInline
        >
          <source src={introvideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Video;
