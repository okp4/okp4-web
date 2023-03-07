import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import content from "/content/pages/learn/roadmap.yaml";
import Roadmap from "../../components/pages/learn/Roadmap";
import Seo from "../../components/SEO";
import seoContent from "/content/transversals/seo.yaml";

export default function LearnRoadmap({ data }) {
  return (
    <Layout
      location={"roadmap"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withPartners={false}
      withAssociates={false}
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

export const Head = () => <Seo content={seoContent.roadmap} />;
