import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import LegalMentionsAndCookiePolicy from "../components/pages/legal/LegalMentionsAndCookiePolicy";

export default function LegalMentions({ data }) {
  return (
    <Layout location={"legalMentions"} files={data}>
      <LegalMentionsAndCookiePolicy />
    </Layout>
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
