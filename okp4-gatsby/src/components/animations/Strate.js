import React, { useEffect, useRef } from "react";
import * as ScrollManager from "../../utils/ScrollManager.js";
import * as ResponsiveManager from "../../utils/ResponsiveManager.js";

const Strate = ({ children, classContainer }) => {
  const divRef = useRef(null);
  const divMonitoring = useRef(null);
  var rafId = 0;

  const monitorSection = () => {
    var intersectionAppear;
    var optionsAppear = {
      root: null,
      rootMargin: "100px",
      threshold: 0,
    };
    intersectionAppear = new IntersectionObserver(appearSection, optionsAppear);
    intersectionAppear.observe(divMonitoring.current);
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
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    let divDimensions = divRef.current.getBoundingClientRect();
    let topPositionSticky = -150;

    if (divDimensions.height > windowHeight) {
      topPositionSticky = -(divDimensions.height - windowHeight + 150);
    }

    let topPositionCss = topPositionSticky + "px";
    divRef.current.style.top = topPositionCss;

    let monitoringHeight =
      parseFloat(divRef.current.dataset.end) -
      parseFloat(divRef.current.dataset.start);
    divMonitoring.current.style.top =
      parseFloat(divRef.current.dataset.start) + "px";
    divMonitoring.current.style.height = monitoringHeight + "px";
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
    rafId = requestAnimationFrame(perspective);
  };

  useEffect(() => {
    if (ResponsiveManager.isWindowLarger("md")) {
      setTimeout(function () {
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        var divDimensions = divRef.current.getBoundingClientRect();
        var divAbsoluteTop = divDimensions.top + window.scrollY;
        var startScale =
          divAbsoluteTop + divDimensions.height - windowHeight + 150;
        if (divDimensions.height < windowHeight) {
          startScale = divAbsoluteTop;
        }
        var endScale = divAbsoluteTop + divDimensions.height;
        divRef.current.dataset.top = divAbsoluteTop;
        divRef.current.dataset.start = startScale;
        divRef.current.dataset.end = endScale;

        setStickyPosition();
        monitorSection();
        // const animationFrame = requestAnimationFrame(perspective);

        // return () => {
        //   cancelAnimationFrame(animationFrame);
        // };
      }, 3000);
    }
  });

  return (
    <>
      <section className={"strate " + classContainer} ref={divRef}>
        <div className="strate__inner">
          <div className="strate__layer"></div>
          {children}
        </div>
      </section>
      <div className="strate__monitoring" ref={divMonitoring}></div>
    </>
  );
};

export default Strate;
