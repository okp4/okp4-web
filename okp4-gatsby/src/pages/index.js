import * as React from "react";
import Layout from "../components/Layout";
import Landing from "../components/pages/index/Landing";

export default function Home() {
  return (
    <Layout location={"homepage"}>
      <Landing></Landing>
    </Layout>
  );
}
