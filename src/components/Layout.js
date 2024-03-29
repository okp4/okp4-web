import React from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/index.scss";
import Halo from "./animations/Halo";

const Layout = ({
  children,
  location,
  files,
  breadcrumbs,
  isStatic = false,
  withDocs = true,
  withBoardTeam = false,
  withAssociates = false,
}) => {
  return (
    <>
      <Preloader />
      <Halo />
      <Header isPositionFixed={isStatic} breadcrumbs={breadcrumbs} />
      <main className={location}>{children}</main>
      {location === "homepage"
        ? ((withBoardTeam = true), (withAssociates = true))
        : ""}
      <Footer
        files={files}
        withDocs={withDocs}
        withBoardTeam={withBoardTeam}
        withAssociates={withAssociates}
      />
    </>
  );
};

export default Layout;
