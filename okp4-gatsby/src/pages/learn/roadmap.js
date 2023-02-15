import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import content from "/content/pages/learn/roadmap.yaml";
import Roadmap from "../../components/pages/learn/Roadmap";

export default function LearnRoadmap({ data }) {
  return (
    <Layout
      location={"roadmap"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withPartners={false}
    >
      <Roadmap />
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
