import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import content from "/content/pages/explore/dataverse-gateways.yaml";

export default function DataverseGateways({ data }) {
  return (
    <Layout
      location={"dataverseGateways"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withPartners={false}
    ></Layout>
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
