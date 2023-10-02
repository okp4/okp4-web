import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import content from "/content/pages/learn/zone.yaml";
import Zone from "../../components/pages/learn/Zone";
import Seo from "../../components/SEO";
import seoContent from "/content/transversals/seo.yaml";

export default function LearnZone({ data }) {
  return (
    <Layout
      location={"zone"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs
      withPartners={false}
      withAssociates={false}
    >
      <Zone />
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

export const Head = () => <Seo content={seoContent.zone} />;
