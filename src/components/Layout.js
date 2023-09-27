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
  withAssociates = true,
  withBoardTeam = false,
  withPartners = true,
}) => {
  return (
    <>
      <Preloader />
      <Halo />
      <Header isPositionFixed={isStatic} breadcrumbs={breadcrumbs} />
      <main className={location}>{children}</main>
      <Footer
        files={files}
        withDocs={withDocs}
        withAssociates={withAssociates}
        withBoardTeam={withBoardTeam}
        withPartners={withPartners}
      />
    </>
  );
};

export default Layout;
