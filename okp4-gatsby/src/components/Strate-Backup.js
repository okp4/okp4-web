import React, { useEffect, useRef, useState } from "react";
import { onDocumentLoad } from "gatsby";

const Strate = ({ children, classContainer }) => {
  const divRef = useRef(null);
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var divTop = 0;

  const getScaleRatio = ({ startScale, endScale }) => {
    let distance = endScale - startScale;
    let parcouru = window.scrollY - startScale;
    let ratio = 1 - (distance - parcouru) / distance;
    return ratio;
  };

  const setDimensions = () => {
    // let divDimensions = divRef.current.getBoundingClientRect();
    // setDivAbsoluteTop(divDimensions.top + window.scrollY);
    // console.log(divAbsoluteTop);
    // setStartScale(divAbsoluteTop + divDimensions.height - windowHeight);
    // setEndScale(divAbsoluteTop + divDimensions.height);
    // console.log({ startScale, endScale });

    const rect = divRef.current.getBoundingClientRect();
    var divTop = rect.top + window.scrollY;
    console.log({ divTop });
  };

  const handleScroll = (divTop) => {
    console.log({ divTop });
    // if (window.scrollY > startScale && window.scrollY < endScale) {
    //   let ratio = getScaleRatio({ startScale, endScale });
    //   let scaleRatio = 1 - ratio / 10;
    //   let scaleCss = "scale(" + scaleRatio + ")";
    //   let translateRatio = windowHeight * ratio;
    //   let translateCss = "translate3d(0, " + translateRatio + "px, 0)";
    //   let transformCss = scaleCss + " " + translateCss;
    //   console.log(transformCss);
    //   divRef.current.style.transform = transformCss;
    // }
  };

  useEffect(() => {
    console.log({ divTop });
    const rect = divRef.current.getBoundingClientRect();
    var divTop = rect.top + window.scrollY;
    console.log({ divTop });
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={"strate " + classContainer} ref={divRef}>
      <div className="strate__inner">{children}</div>
    </section>
  );

  // const setStickyPosition = () => {
  //   let divDimensions = divRef.current.getBoundingClientRect();
  //   let topPositionSticky = -(divDimensions.height - windowHeight);
  //   let topPositionCss = topPositionSticky + "px";
  //   divRef.current.style.top = topPositionCss;
  // };
};

export default Strate;
