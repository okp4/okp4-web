import React, { useEffect, useRef, useState } from "react";
import { onDocumentLoad } from "gatsby";

const Strate = ({ children, classContainer }) => {
  const divRef = useRef(null);
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const setStickyPosition = () => {
    let divDimensions = divRef.current.getBoundingClientRect();
    let topPositionSticky = -(divDimensions.height - windowHeight);
    let topPositionCss = topPositionSticky + "px";
    divRef.current.style.top = topPositionCss;
  };

  const getScaleRatio = ({ startScale, endScale }) => {
    let distance = endScale - startScale;
    let parcouru = window.scrollY - startScale;
    let ratio = 1 - (distance - parcouru) / distance;
    return ratio;
  };

  const perspective = () => {
    let divAbsoluteTop = divRef.current.dataset.top;
    let startScale = divRef.current.dataset.start;
    let endScale = divRef.current.dataset.end;

    if (window.scrollY > startScale && window.scrollY < endScale) {
      let ratio = getScaleRatio({ startScale, endScale });
      console.log(ratio);

      let scaleRatio = 1 - ratio / 5;
      let scaleCss =
        "scale3d(" + scaleRatio + "," + scaleRatio + "," + scaleRatio + ")";
      divRef.current.style.transform = scaleCss;

      // let translateRatio = windowHeight * ratio;
      // let translateCss = "translate3d(0, " + translateRatio + "px, 0)";
      // divRef.current.querySelector(".strate__inner").style.transform =
      //   translateCss;

      let opacityRatio = 1 - ratio;
      divRef.current.querySelector(".strate__inner").style.opacity =
        opacityRatio;
    }
    requestAnimationFrame(perspective);
  };

  useEffect(() => {
    var divDimensions = divRef.current.getBoundingClientRect();
    var divAbsoluteTop = divDimensions.top + window.scrollY;
    var startScale = divAbsoluteTop + divDimensions.height - windowHeight;
    var endScale = divAbsoluteTop + divDimensions.height;
    divRef.current.dataset.top = divAbsoluteTop;
    divRef.current.dataset.start = startScale;
    divRef.current.dataset.end = endScale;
    console.log(divRef.current.dataset);

    setStickyPosition();
    const animationFrame = requestAnimationFrame(perspective);
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className={"strate " + classContainer} ref={divRef}>
      <div className="strate__inner">{children}</div>
    </section>
  );
};

export default Strate;
