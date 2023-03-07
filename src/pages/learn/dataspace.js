import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import content from "/content/pages/learn/dataSpace.yaml";
import DataSpace from "../../components/pages/learn/DataSpace";
import Seo from "../../components/SEO";
import seoContent from "/content/transversals/seo.yaml";

export default function LearnDataSpace({ data }) {
  return (
    <Layout
      location={"dataspace"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs
      withPartners={false}
      withAssociates={false}
    >
      <DataSpace />
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

export const Head = () => <Seo content={seoContent.dataSpace} />;
