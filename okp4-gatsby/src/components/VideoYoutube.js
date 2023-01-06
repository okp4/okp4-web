import React from "react";

const VideoYoutube = ({ youtubeId }) => {
  return (
    <div className="videoWrapper">
      <iframe
        width="300"
        height="300"
        title="youtubeVideo"
        src={
          "https://www.youtube.com/embed/" +
          youtubeId +
          "?mute=1&autoplay=1&controls=0&loop=1&modestbranding=1&showinfo=0&rel=0&playlist=" +
          youtubeId
        }
      ></iframe>
    </div>
  );
};

export default VideoYoutube;
