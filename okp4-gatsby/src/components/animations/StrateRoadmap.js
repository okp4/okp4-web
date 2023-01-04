import React, { useEffect, useRef } from "react";
import * as ScrollManager from "../../utils/ScrollManager.js";

const StrateRoadmap = ({
  children,
  classContainer,
  scaleTopSticky,
  scaleMax,
}) => {
  const divRef = useRef(null);
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const setStickyPosition = () => {
    let divDimensions = divRef.current.getBoundingClientRect();
    let topPositionSticky = parseInt(scaleTopSticky);
    let topPositionCss = topPositionSticky + "px";
    divRef.current.style.top = topPositionCss;
  };

  const perspective = () => {
    let divAbsoluteTop = divRef.current.dataset.top;
    let startScale = divRef.current.dataset.start;
    let endScale = divRef.current.dataset.end;
    let height = divRef.current.dataset.height;

    if (window.scrollY >= startScale && window.scrollY <= endScale) {
      let ratio = ScrollManager.getScaleRatio({ startScale, endScale });

      let scaleRatio = (1 - ratio * scaleMax).toFixed(4);
      let scaleCss =
        "scale3d(" + scaleRatio + "," + scaleRatio + "," + scaleRatio + ")";
      divRef.current.style.transform = scaleCss;

      // let translateRatio = ratio * height;
      // let translateCss = "translate3d(0," + translateRatio + "px, 0) ";
      // let transformCss = translateCss + scaleCss;
      // divRef.current.style.transform = transformCss;

      let opacityRatio = (ratio / 4).toFixed(4);
      divRef.current.querySelector(".roadmap__item__layer").style.opacity =
        opacityRatio;
    }
    requestAnimationFrame(perspective);
  };

  useEffect(() => {
    setTimeout(function () {
      var divDimensions = divRef.current.getBoundingClientRect();
      var divAbsoluteTop = divDimensions.top + window.scrollY;
      // var startScale = divAbsoluteTop + divDimensions.height - windowHeight;
      var startScale = divAbsoluteTop - scaleTopSticky;
      var endScale = divAbsoluteTop - scaleTopSticky + divDimensions.height;
      divRef.current.dataset.top = divAbsoluteTop;
      divRef.current.dataset.start = startScale;
      divRef.current.dataset.end = endScale;
      divRef.current.dataset.height = divDimensions.height;

      setStickyPosition();
      const animationFrame = requestAnimationFrame(perspective);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, 3000);
  }, []);

  return (
    <div className={classContainer} ref={divRef}>
      {children}
    </div>
  );
};

export default StrateRoadmap;
