import React, { useEffect, useRef } from "react";

const Halo = () => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.parentNode.addEventListener("mouseenter", handleMouseEnter);
    divRef.current.parentNode.addEventListener("mousemove", handleMouseMove);
    divRef.current.parentNode.addEventListener("mouseleave", handleMouseLeave);

    return () => {
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
    };
  }, []);

  function handleMouseEnter(event) {
    divRef.current.classList.add("is-active");
  }

  function handleMouseLeave(event) {
    divRef.current.classList.remove("is-active");
  }

  function handleMouseMove(event) {
    // Update the position of the div based on the mouse position
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
    <div className="halo" ref={divRef}>
      <div className="halo__light"></div>
    </div>
  );
};

export default Halo;
