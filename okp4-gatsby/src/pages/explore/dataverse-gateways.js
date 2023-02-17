import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DataverseGateways from "../../components/pages/explore/DataverseGateways";
import content from "/content/pages/explore/dataverse-gateways.yaml";

export default function ExploreDataverseGateways({ data }) {
  return (
    <Layout
      location={"dataverseGateways"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withPartners={false}
    >
      <DataverseGateways files={data} />
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

// TODO : SEO
