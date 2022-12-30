import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/index.scss";

const Layout = ({ children, location }) => {
  return (
    <>
      <Header />
      <main className={location}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
