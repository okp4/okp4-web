import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Okp4 from "../../components/pages/learn/Okp4";
import content from "/content/pages/learn/okp4.yaml";
import Seo from "../../components/SEO";
import seoContent from "/content/transversals/seo.yaml";

export default function LearnOkp4({ data }) {
  return (
    <Layout
      location={"okp4"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withBoardTeam={false}
      withAssociates={false}
    >
      <Okp4 files={data} />
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

export const Head = () => <Seo content={seoContent.okp4} />;
