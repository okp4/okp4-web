import React, { useEffect, useRef } from "react";
import * as ScrollManager from "../../utils/ScrollManager.js";
import * as ResponsiveManager from "../../utils/ResponsiveManager.js";

const Parallax = ({
  children,
  classContainer,
  parallaxStart,
  parallaxEnd,
  parallaxMiddle,
}) => {
  const divRef = useRef(null);
  var rafId = 0;

  const monitorSection = () => {
    var intersectionAppear;
    var optionsAppear = {
      root: null,
      rootMargin: "10px",
      threshold: 0,
    };
    intersectionAppear = new IntersectionObserver(appearSection, optionsAppear);
    intersectionAppear.observe(divRef.current);
  };

  const appearSection = (entries, intersectionAppear) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        rafId = requestAnimationFrame(handleParallax);
      } else {
        cancelAnimationFrame(rafId);
      }
    });
  };

  const setInitialPosition = () => {
    var transformRatioCss = "translate3d(0, " + parallaxStart + "px, 0)";
    divRef.current.style.transform = transformRatioCss;
  };

  const handleParallax = () => {
    // if (ScrollManager.isIntersectingViewport(divRef.current)) {
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
    // }
    rafId = requestAnimationFrame(handleParallax);
  };

  useEffect(() => {
    if (ResponsiveManager.isWindowLarger("lg")) {
      setTimeout(function () {
        setInitialPosition();

        //IntersectionObserver Approach
        // monitorSection();

        //Classic Approach
        rafId = requestAnimationFrame(handleParallax);

        return () => {
          cancelAnimationFrame(rafId);
        };
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
