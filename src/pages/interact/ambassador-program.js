import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import content from "/content/pages/interact/ambassador-program.yaml";
import Seo from "../../components/SEO";
import seoContent from "/content/transversals/seo.yaml";
import AmbassadorProgram from "../../components/pages/interact/AmbassadorProgram";

export default function Ambassador({ data }) {
  console.log({ data });

  return (
    <Layout
      location={"ambassador_program"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
    >
      <AmbassadorProgram files={data} />
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

export const Head = () => <Seo content={seoContent.ambassadorProgram} />;
