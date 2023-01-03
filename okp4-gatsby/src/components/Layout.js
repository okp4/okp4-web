import React from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/index.scss";

const Layout = ({ children, location }) => {
  return (
    <>
      <Preloader />
      <Header />
      <main className={location}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
