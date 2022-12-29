import React from "react";
import IconPlay from "/src/assets/images/icons/play.inline.svg";
import Strate from "../../Strate.js";

const Video = () => {
  return (
    <Strate classContainer={"video"}>
      <div className="video__player" data-reveal="1">
        {/* Mettre vidéo tag ici */}
        <IconPlay />
      </div>
    </Strate>
  );
};

export default Video;
