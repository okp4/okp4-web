import React from "react";
import VideoMp4 from "../assets/videos/okp4-720p.mp4";
import VideoWebm from "../assets/videos/okp4-720p.webm";

const VideoLocale = ({ youtubeId }) => {
  return (
    <div className="videoWrapper">
      <video autoPlay loop muted playsInline controls>
        <source src={VideoMp4} type="video/mp4" />
        <source src={VideoWebm} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoLocale;
