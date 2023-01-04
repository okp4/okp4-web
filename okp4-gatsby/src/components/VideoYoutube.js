import React from "react";

const VideoYoutube = ({ youtubeId }) => {
  return (
    <div className="videoWrapper">
      <iframe
        width="80vw"
        height="45vw"
        src={
          "https://www.youtube.com/embed/" +
          youtubeId +
          "?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&playsinline=1&showinfo=0&rel=0&playlist=" +
          youtubeId
        }
      ></iframe>
    </div>
  );
};

export default VideoYoutube;
