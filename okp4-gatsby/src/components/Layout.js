import React from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/index.scss";

const Layout = ({ children, location, files }) => {
  return (
    <>
      <Preloader />
      <Header files={files} fixed={homepage} />
      <main className={location}>{children}</main>
      <Footer files={files} withDocsAndPartners={homepage} />
    </>
  );
};

export default Layout;
