import React, { useEffect, useRef } from "react";
import * as ResponsiveManager from "../../utils/ResponsiveManager.js";

const Halo = () => {
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(function () {
      if (divRef.current) {
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
        return () => {
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
        };
      }
    }, 1000);
  });

  function handleMouseEnter(event) {
    if (divRef.current) {
      divRef.current.classList.add("is-active");
    }
  }

  function handleMouseLeave(event) {
    if (divRef.current) {
      divRef.current.classList.remove("is-active");
    }
  }

  function handleMouseMove(event) {
    if (divRef.current) {
      divRef.current.classList.add("is-active");
    }
    setTimeout(() => {
      if (divRef.current) {
        let offsetY = divRef.current.getBoundingClientRect().y;
        let mouseX = event.clientX;
        let mouseY = event.clientY - offsetY;
        let transformCss = "translate3d(" + mouseX + "px, " + mouseY + "px, 0)";
        divRef.current.querySelector(".halo__light").style.transform =
          transformCss;
      }
    }, 100);
  }

  return (
    <div className="halo" ref={divRef}>
      <div className="halo__light"></div>
    </div>
  );
};

export default Halo;
