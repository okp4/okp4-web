import React from "react";
import IconPlay from "/src/assets/images/icons/play.inline.svg";
import Strate from "../../animations/Strate.js";
import VideoLocale from "../../VideoLocale.js";
import content from "/content/pages/index/video.yaml";

const Video = ({ files }) => {
  return (
    <Strate classContainer={"video"}>
      <div className="video__player" data-reveal="1">
        <VideoLocale
          files={files}
          mp4={content.video.mp4}
          webm={content.video.webm}
        />
        <IconPlay />
      </div>
    </Strate>
  );
};

export default Video;
