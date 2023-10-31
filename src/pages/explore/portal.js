import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Portal from "../../components/pages/explore/Portal";
import content from "/content/pages/explore/portal.yaml";
import Seo from "../../components/SEO";
import seoContent from "/content/transversals/seo.yaml";

export default function ExplorePortal({ data }) {
  return (
    <Layout
      location={"portal"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withPartners={false}
    >
      <Portal />
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

export const Head = () => <Seo content={seoContent.portal} />;
