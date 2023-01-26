import React from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/index.scss";

const Layout = ({ children, location, files }) => {
  const isHomePage = location === "homepage";

  return (
    <>
      <Preloader />
      <Header isPositionFixed={isHomePage} />
      <main className={location}>{children}</main>
      <Footer files={files} withDocsAndPartners={isHomePage} />
    </>
  );
};

export default Layout;
