import React from "react";
import Header from "./Header";
import "../assets/styles/index.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
