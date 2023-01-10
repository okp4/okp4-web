import React, { useEffect } from "react";
import * as PerformanceManager from "../utils/PerformanceManager.js";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/index.scss";

const Layout = ({ children, location }) => {
  useEffect(() => {
    setTimeout(function () {
      PerformanceManager.monitorInfiniteAnimations();
    }, 1000);
  });

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
