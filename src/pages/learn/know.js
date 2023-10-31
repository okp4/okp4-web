import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Know from "../../components/pages/learn/Know";
import content from "/content/pages/learn/know.yaml";
import Seo from "../../components/SEO";
import seoContent from "/content/transversals/seo.yaml";

export default function LearnKnow({ data }) {
  return (
    <Layout
      location={"know"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={true}
      withPartners={false}
    >
      <Know />
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
    mediumPosts: allMediumPost(limit: 3, sort: { createdAt: DESC }) {
      edges {
        node {
          id
          uniqueSlug
          title
          createdAt(formatString: "MMM DD")
          virtuals {
            subtitle
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo content={seoContent.know} />;
