import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import content from "/content/pages/learn/dataverse.yaml";
import Dataverse from "../../components/pages/learn/Dataverse";

export default function LearnDataverse({ data }) {
  return (
    <Layout
      location={"dataverse"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs
      withAssociates={false}
      withPartners={false}
    >
      <Dataverse files={data} />
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
