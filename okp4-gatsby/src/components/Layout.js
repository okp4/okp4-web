import React from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/index.scss";

const Layout = ({
  children,
  location,
  files,
  breadcrumbs,
  isStatic = false,
  withDocs = true,
  withPartners = true,
}) => {
  return (
    <>
      <Preloader />
      <Header isPositionFixed={isStatic} breadcrumbs={breadcrumbs} />
      <main className={location}>{children}</main>
      <Footer files={files} withDocs={withDocs} withPartners={withPartners} />
    </>
  );
};

export default Layout;
