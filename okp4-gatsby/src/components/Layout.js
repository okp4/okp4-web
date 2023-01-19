import React, { useEffect } from "react";
import * as PerformanceManager from "../utils/PerformanceManager.js";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/index.scss";

const Layout = ({ children, location, files }) => {
  // useEffect(() => {
  //   setTimeout(function () {
  //     PerformanceManager.monitorInfiniteAnimations();
  //   }, 1000);
  // });

  return (
    <>
      <Preloader />
      <Header files={files} />
      <main className={location}>{children}</main>
      <Footer files={files} />
    </>
  );
};

export default Layout;
