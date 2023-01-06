import * as React from "react";
import Layout from "../components/Layout";
import Landing from "../components/pages/index/Landing";
import Introduction from "../components/pages/index/Introduction";
import Video from "../components/pages/index/Video";
import Universe from "../components/pages/index/Universe";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Layout location={"homepage"}>
      <Landing />
      <Introduction />
      <Video />
      <Universe />
    </Layout>
  );
}

export const Head = () => <SEO></SEO>;
