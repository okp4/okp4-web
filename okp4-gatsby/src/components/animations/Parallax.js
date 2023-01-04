import React, { useEffect, useRef } from "react";
import * as ScrollManager from "../../utils/ScrollManager.js";

const Parallax = ({
  children,
  classContainer,
  parallaxStart,
  parallaxEnd,
  parallaxMiddle,
}) => {
  const divRef = useRef(null);

  const setInitialPosition = () => {
    var transformRatioCss = "translate3d(0, " + parallaxStart + "px, 0)";
    divRef.current.style.transform = transformRatioCss;
  };

  const handleParallax = () => {
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
        if (new_ratio == 0.9999) new_ratio = 1;
        transformRatio = new_ratio.toFixed(4) * parallaxStart;
      }

      var transformRatioCss = "translate3d(0, " + transformRatio + "px, 0)";
      divRef.current.style.transform = transformRatioCss;
    }
    const animationFrame = requestAnimationFrame(handleParallax);
  };

  useEffect(() => {
    setTimeout(function () {
      setInitialPosition();
      const animationFrame = requestAnimationFrame(handleParallax);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, 1000);
  }, []);

  return (
    <div ref={divRef} className={classContainer}>
      {children}
    </div>
  );
};

export default Parallax;
