import React from "react";
import Header from "./Header";
import "../assets/styles/index.scss";

const Layout = ({ children, location }) => {
  return (
    <>
      <Header />
      <main className={location}>{children}</main>
    </>
  );
};

export default Layout;
