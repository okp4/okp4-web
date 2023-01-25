import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import LegalMentionsAndCookiePolicy from "../components/pages/legal/LegalMentionsAndCookiePolicy";

export default function LegalMentions({ data }) {
  const allFiles = data.allFile.edges;
  return (
    <Layout location={"legalMentions"} files={allFiles}>
      <LegalMentionsAndCookiePolicy />
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllImages {
    allFile {
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
