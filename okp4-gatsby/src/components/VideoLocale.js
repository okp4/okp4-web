import React from "react";
import * as MediaManager from "../utils/MediaManager.js";

const VideoLocale = ({ files, mp4, webm }) => {
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
