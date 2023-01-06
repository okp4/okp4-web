import React, { useEffect, useRef } from "react";

const VideoYoutube = ({ youtubeId }) => {
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      divRef.current.setAttribute("src", divRef.current.dataset.src);
    }, 1000);
  });

  return (
    <div className="videoWrapper">
      <iframe
        ref={divRef}
        width="300"
        height="300"
        title="youtubeVideo"
        data-src={
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
