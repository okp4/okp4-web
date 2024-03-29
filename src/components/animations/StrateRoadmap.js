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

  const setStickyPosition = () => {
    if (divRef.current) {
      let topPositionSticky = parseInt(scaleTopSticky);
      if (ResponsiveManager.isWindowSmaller("md")) {
        topPositionSticky = topPositionSticky / 2;
      }
      let topPositionCss = topPositionSticky + "px";
      divRef.current.style.top = topPositionCss;
    }
  };

  const perspective = () => {
    if (divRef.current) {
      const startScale = divRef.current?.dataset.start;
      const endScale = divRef.current?.dataset.end;

      if (window.scrollY >= startScale && window.scrollY <= endScale) {
        const ratio = ScrollManager.getScaleRatio({ startScale, endScale });

        const scaleRatio = (1 - ratio * scaleMax).toFixed(4);
        const scaleCss =
          "scale3d(" + scaleRatio + "," + scaleRatio + "," + scaleRatio + ")";
        divRef.current.style.transform = scaleCss;

        const opacityRatio = (ratio / 4).toFixed(4);
        divRef.current.querySelector(
          ".homepage__roadmap__item__layer"
        ).style.opacity = opacityRatio;
      }
      divRef.current.rafId = requestAnimationFrame(perspective);
    }
  };

  useEffect(() => {
    if (!isLastItem) {
      setTimeout(function () {
        if (divRef.current) {
          const divDimensions = divRef.current.getBoundingClientRect();
          const divAbsoluteTop = divDimensions.top + window.scrollY;
          const startScale = divAbsoluteTop - scaleTopSticky;
          const endScale =
            divAbsoluteTop - scaleTopSticky + divDimensions.height;
          divRef.current.dataset.top = divAbsoluteTop;
          divRef.current.dataset.start = startScale;
          divRef.current.dataset.end = endScale;
          divRef.current.dataset.height = divDimensions.height;

          setStickyPosition();
          divRef.current.rafId = 0;
          divRef.current.rafId = requestAnimationFrame(perspective);

          return () => {
            cancelAnimationFrame(divRef.current.rafId);
          };
        }
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
