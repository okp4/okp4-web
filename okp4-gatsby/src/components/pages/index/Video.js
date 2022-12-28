import React from "react";
import IconPlay from "/src/assets/images/icons/play.inline.svg";

const Video = () => {
  return (
    <section className="strate video">
      <div className="video__player" data-reveal="1">
        {/* Mettre vidéo tag ici */}
        <IconPlay />
      </div>
    </section>
  );
};

export default Video;
