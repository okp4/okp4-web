import React, { useEffect, useRef } from "react";
import * as ResponsiveManager from "../../utils/ResponsiveManager.js";

const Halo = ({ classContainer = "halo--regular" }) => {
  const divRef = useRef(null);

  const monitorSection = () => {
    var intersectionAppear;
    var optionsAppear = {
      root: null,
      rootMargin: "50px",
      threshold: 0,
    };
    intersectionAppear = new IntersectionObserver(appearSection, optionsAppear);
    intersectionAppear.observe(divRef.current.parentNode);
  };

  const appearSection = (entries, intersectionAppear) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (ResponsiveManager.isWindowLarger("lg")) {
          divRef.current.parentNode.addEventListener(
            "mouseenter",
            handleMouseEnter
          );
          divRef.current.parentNode.addEventListener(
            "mousemove",
            handleMouseMove
          );
          divRef.current.parentNode.addEventListener(
            "mouseleave",
            handleMouseLeave
          );
        }
      } else {
        if (ResponsiveManager.isWindowLarger("lg")) {
          divRef.current.parentNode.removeEventListener(
            "mouseenter",
            handleMouseEnter
          );
          divRef.current.parentNode.removeEventListener(
            "mousemove",
            handleMouseMove
          );
          divRef.current.parentNode.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        }
      }
    });
  };

  useEffect(() => {
    setTimeout(function () {
      monitorSection();
    }, 1000);
  });

  function handleMouseEnter(event) {
    divRef.current.classList.add("is-active");
  }

  function handleMouseLeave(event) {
    divRef.current.classList.remove("is-active");
  }

  function handleMouseMove(event) {
    setTimeout(() => {
      let offsetY = divRef.current.getBoundingClientRect().y;
      let mouseX = event.clientX;
      let mouseY = event.clientY - offsetY;
      let transformCss = "translate3d(" + mouseX + "px, " + mouseY + "px, 0)";
      divRef.current.querySelector(".halo__light").style.transform =
        transformCss;
    }, 100);
  }

  return (
    <div className={"halo " + classContainer} ref={divRef}>
      <div className="halo__light"></div>
    </div>
  );
};

export default Halo;
