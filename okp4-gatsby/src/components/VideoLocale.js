import React from "react";
import * as MediaManager from "../utils/MediaManager.js";
// import VideoMp4 from "../assets/videos/okp4-720p.mp4";
// import VideoWebm from "../assets/videos/okp4-720p.webm";

const VideoLocale = ({ files, mp4, webm }) => {
  console.log({ files });
  return (
    <div className="videoWrapper">
      <video autoPlay loop muted playsInline controls>
        <source src={MediaManager.GetVideo(mp4, files)} type="video/mp4" />
        <source src={MediaManager.GetVideo(webm, files)} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoLocale;
