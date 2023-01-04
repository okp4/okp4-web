import React from "react";
import IconPlay from "/src/assets/images/icons/play.inline.svg";
import Strate from "../../animations/Strate.js";
import VideoYoutube from "../../VideoYoutube.js";

const Video = () => {
  return (
    <Strate classContainer={"video"}>
      <div className="video__player" data-reveal="1">
        <VideoYoutube youtubeId="Dt9O3-1bIDU" />
        <IconPlay />
      </div>
    </Strate>
  );
};

export default Video;
