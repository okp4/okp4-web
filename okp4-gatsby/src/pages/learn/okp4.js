import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Okp4 from "../../components/pages/learn/Okp4";

export default function LegalMentions({ data }) {
  return (
    <Layout location={"okp4"} files={data} isStatic withDocs={false}>
      <Okp4 files={data} />
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
