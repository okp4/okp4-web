import React, { useEffect, useRef } from "react";
import Halo from "./animations/Halo.js";

const Header = () => {
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add("is-fully-loaded");
    }, 2000);
  });

  return (
    <section className="preloader" ref={divRef}>
      <Halo />
    </section>
  );
};

export default Header;
