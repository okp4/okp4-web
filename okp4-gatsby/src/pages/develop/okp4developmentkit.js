import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import content from "/content/pages/develop/developmentKit.yaml";
import DevelopmentKit from "../../components/pages/develop/Developmentkit";

export default function DevelopDevelopmentKit({ data }) {
  return (
    <Layout
      location={"developmentkit"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withAssociates={false}
      withPartners={false}
    >
      <DevelopmentKit />
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

export const Head = () => <Seo />;
