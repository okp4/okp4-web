import React, { useEffect, useRef } from "react";

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

  const isIntersectingViewport = () => {
    const rect = divRef.current.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    if (rect.top < windowHeight && rect.top > -rect.height) return true;
    else return false;
  };

  const getIntersectionRatio = () => {
    const rect = divRef.current.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const distance = rect.height + windowHeight;
    const percentTravelled = (distance - rect.bottom) / distance;

    return percentTravelled;
  };

  const handleParallax = () => {
    if (isIntersectingViewport()) {
      var ratio = getIntersectionRatio();
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
