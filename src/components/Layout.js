import React from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/index.scss";
import AnalyticsScript from "./AnalyticsScript";

const Layout = ({
  children,
  location,
  files,
  breadcrumbs,
  isStatic = false,
  withDocs = true,
  withAssociates = true,
  withPartners = true,
}) => {
  return (
    <>
      <Preloader />
      <Header isPositionFixed={isStatic} breadcrumbs={breadcrumbs} />
      <main className={location}>
        <AnalyticsScript />
        {children}
      </main>
      <Footer
        files={files}
        withDocs={withDocs}
        withAssociates={withAssociates}
        withPartners={withPartners}
      />
    </>
  );
};

export default Layout;
