import React, { useEffect, useRef } from "react";
import * as ScrollManager from "../../utils/ScrollManager.js";
import * as ResponsiveManager from "../../utils/ResponsiveManager.js";

const StrateRoadmap = ({
  children,
  classContainer,
  scaleTopSticky,
  scaleMax,
  isLastItem,
}) => {
  const divRef = useRef(null);
  var rafId = 0;

  const monitorSection = () => {
    var intersectionAppear;
    var optionsAppear = {
      root: null,
      rootMargin: "30px",
      threshold: 0,
    };
    intersectionAppear = new IntersectionObserver(appearSection, optionsAppear);
    intersectionAppear.observe(divRef.current);
  };

  const appearSection = (entries, intersectionAppear) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        rafId = requestAnimationFrame(perspective);
      } else {
        cancelAnimationFrame(rafId);
      }
    });
  };

  const setStickyPosition = () => {
    let topPositionSticky = parseInt(scaleTopSticky);
    if (ResponsiveManager.isWindowSmaller("md")) {
      topPositionSticky = topPositionSticky / 2;
    }
    let topPositionCss = topPositionSticky + "px";
    divRef.current.style.top = topPositionCss;
  };

  const perspective = () => {
    let startScale = divRef.current.dataset.start;
    let endScale = divRef.current.dataset.end;

    if (window.scrollY >= startScale && window.scrollY <= endScale) {
      let ratio = ScrollManager.getScaleRatio({ startScale, endScale });

      let scaleRatio = (1 - ratio * scaleMax).toFixed(4);
      let scaleCss =
        "scale3d(" + scaleRatio + "," + scaleRatio + "," + scaleRatio + ")";
      divRef.current.style.transform = scaleCss;

      let opacityRatio = (ratio / 4).toFixed(4);
      divRef.current.querySelector(".roadmap__item__layer").style.opacity =
        opacityRatio;
    }
    rafId = requestAnimationFrame(perspective);
  };

  useEffect(() => {
    if (!isLastItem) {
      setTimeout(function () {
        var divDimensions = divRef.current.getBoundingClientRect();
        var divAbsoluteTop = divDimensions.top + window.scrollY;
        var startScale = divAbsoluteTop - scaleTopSticky;
        var endScale = divAbsoluteTop - scaleTopSticky + divDimensions.height;
        divRef.current.dataset.top = divAbsoluteTop;
        divRef.current.dataset.start = startScale;
        divRef.current.dataset.end = endScale;
        divRef.current.dataset.height = divDimensions.height;

        setStickyPosition();

        //IntersectionObserver Approach
        // monitorSection();

        //Classic Approach
        rafId = requestAnimationFrame(perspective);

        return () => {
          cancelAnimationFrame(rafId);
        };
      }, 3000);
    }
  });

  return (
    <div className={classContainer} ref={divRef}>
      {children}
    </div>
  );
};

export default StrateRoadmap;
