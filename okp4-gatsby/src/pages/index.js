import * as React from "react";
import Layout from "../components/Layout";
import Landing from "../components/pages/index/Landing";
import Introduction from "../components/pages/index/Introduction";

export default function Home() {
  return (
    <Layout location={"homepage"}>
      <Landing></Landing>
      <Introduction></Introduction>
    </Layout>
  );
}
