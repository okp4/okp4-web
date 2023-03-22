import React, { useEffect, useRef } from "react";

const Header = () => {
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add("is-fully-loaded");
    }, 100);
  });

  return <section className="preloader" ref={divRef} />;
};

export default Header;
