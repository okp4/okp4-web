import * as React from "react";
import Layout from "../components/Layout";
import LegalMentionsAndCookiePolicy from "../components/pages/legal/LegalMentionsAndCookiePolicy";

export default function LegalMentions() {
  return (
    <Layout location={"legalMentions"}>
      <LegalMentionsAndCookiePolicy />
    </Layout>
  );
}
