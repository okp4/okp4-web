import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import content from "/content/pages/develop/validator.yaml";
import Validator from "../../components/pages/develop/Validator";

export default function DevelopValidator({ data }) {
  return (
    <Layout
      location={"validator"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withAssociates={false}
      withPartners={false}
    >
      <Validator files={data} />
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
