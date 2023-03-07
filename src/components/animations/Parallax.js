import React, { useEffect, useRef } from "react";
import * as ScrollManager from "../../utils/ScrollManager.js";
import * as ResponsiveManager from "../../utils/ResponsiveManager.js";

const Parallax = ({
  children,
  classContainer,
  parallaxStart,
  parallaxEnd,
  parallaxMiddle,
  size = "md",
}) => {
  const divRef = useRef(null);

  const setInitialPosition = () => {
    if (divRef.current) {
      var transformRatioCss = "translate3d(0, " + parallaxStart + "px, 0)";
      divRef.current.style.transform = transformRatioCss;
    }
  };

  const handleParallax = () => {
    if (divRef.current) {
      if (ScrollManager.isIntersectingViewport(divRef.current)) {
        var ratio = ScrollManager.getIntersectionRatio(divRef.current);
        var new_ratio;
        var transformRatio;

        if (ratio > 0.3334) {
          new_ratio = (ratio - 0.3334) * (3 / 2);
          transformRatio = new_ratio.toFixed(4) * parallaxEnd;
        }

        if (ratio < 0.3334) {
          new_ratio = 1 - ratio * 3;
          if (new_ratio === 0.9999) new_ratio = 1;
          transformRatio = new_ratio.toFixed(4) * parallaxStart;
        }

        var transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
        divRef.current.style.transform = transformRatioCss;
      }
      divRef.current.rafId = requestAnimationFrame(handleParallax);
    }
  };

  useEffect(() => {
    if (ResponsiveManager.isWindowLarger(size)) {
      setTimeout(function () {
        if (divRef.current) {
          divRef.current.rafId = 0;
          setInitialPosition();
          divRef.current.rafId = requestAnimationFrame(handleParallax);

          return () => {
            cancelAnimationFrame(divRef.current.rafId);
          };
        }
      }, 1000);
    }
  });

  return (
    <div ref={divRef} className={classContainer}>
      {children}
    </div>
  );
};

export default Parallax;
