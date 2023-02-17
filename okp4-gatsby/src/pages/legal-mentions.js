import * as React from "react";
import { graphql } from "gatsby";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/index.scss";
import LegalMentionsAndCookiePolicy from "../components/pages/legal/LegalMentionsAndCookiePolicy";
import Seo from "../components/SEO";

export default function LegalMentions({ data }) {
  return (
    <>
      <Preloader />
      <Header isPositionFixed />
      <main className="legalMentions">
        <LegalMentionsAndCookiePolicy />
      </main>
      <Footer files={data} withDocs={false} withPartners={false} />
    </>
  );
}

export const pageQuery = graphql`
  query FilesQuery {
    allImages: allFile(filter: { extension: { nin: ["mp4", "ogg", "webm"] } }) {
      edges {
        node {
          id
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo></Seo>;
