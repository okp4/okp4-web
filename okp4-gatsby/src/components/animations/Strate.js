import React, { useEffect, useRef } from "react";
import * as ScrollManager from "../../utils/ScrollManager.js";

const Strate = ({ children, classContainer }) => {
  const divRef = useRef(null);
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const setStickyPosition = () => {
    let divDimensions = divRef.current.getBoundingClientRect();
    let topPositionSticky = -40;

    if (divDimensions.height > windowHeight) {
      topPositionSticky = -(divDimensions.height - windowHeight);
    }

    let topPositionCss = topPositionSticky + "px";
    divRef.current.style.top = topPositionCss;
  };

  const perspective = () => {
    let startScale = divRef.current.dataset.start;
    let endScale = divRef.current.dataset.end;

    if (window.scrollY >= startScale && window.scrollY <= endScale) {
      let ratio = ScrollManager.getScaleRatio({ startScale, endScale });

      let scaleRatio = (1 - ratio / 10).toFixed(4);
      let scaleCss =
        "scale3d(" + scaleRatio + "," + scaleRatio + "," + scaleRatio + ")";
      divRef.current.style.transform = scaleCss;

      let opacityRatio = (ratio / 2).toFixed(4);
      divRef.current.querySelector(".strate__layer").style.opacity =
        opacityRatio;
    }
    requestAnimationFrame(perspective);
  };

  useEffect(() => {
    setTimeout(function () {
      var divDimensions = divRef.current.getBoundingClientRect();
      var divAbsoluteTop = divDimensions.top + window.scrollY;
      var startScale = divAbsoluteTop + divDimensions.height - windowHeight;
      if (divDimensions.height < windowHeight) {
        startScale = divAbsoluteTop;
      }
      var endScale = divAbsoluteTop + divDimensions.height;
      divRef.current.dataset.top = divAbsoluteTop;
      divRef.current.dataset.start = startScale;
      divRef.current.dataset.end = endScale;

      setStickyPosition();
      const animationFrame = requestAnimationFrame(perspective);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, 1000);
  }, []);

  return (
    <section className={"strate " + classContainer} ref={divRef}>
      <div className="strate__inner">
        <div className="strate__layer"></div>
        {children}
      </div>
    </section>
  );
};

export default Strate;
