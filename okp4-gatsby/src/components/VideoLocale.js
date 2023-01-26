import React, { useEffect, useRef } from "react";
import * as MediaManager from "../utils/MediaManager.js";

const VideoLocale = ({ files, mp4, webm }) => {
  const divRef = useRef(null);

  const revealVideo = () => {
    var intersectionAppear;
    var optionsAppear = {
      root: null,
      rootMargin: "100px",
      threshold: 0,
    };
    intersectionAppear = new IntersectionObserver(appearInView, optionsAppear);
    intersectionAppear.observe(divRef.current);
  };

  const appearInView = (entries, intersectionAppear) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        divRef.current.play();
        intersectionAppear.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      revealVideo();
    }, 1000);
  });

  return (
    <div className="videoWrapper">
      <video preload="none" loop muted playsInline controls ref={divRef}>
        <source src={MediaManager.GetVideo(mp4, files)} type="video/mp4" />
        <source src={MediaManager.GetVideo(webm, files)} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoLocale;
