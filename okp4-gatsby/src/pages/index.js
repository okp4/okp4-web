import * as React from "react";
import Layout from "../components/Layout";
import Landing from "../components/pages/index/Landing";
import Introduction from "../components/pages/index/Introduction";
import Video from "../components/pages/index/Video";
import Universe from "../components/pages/index/Universe";

export default function Home() {
  return (
    <Layout location={"homepage"}>
      <Landing></Landing>
      <Introduction></Introduction>
      <Video></Video>
      <Universe></Universe>
    </Layout>
  );
}
