import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Developers from "../../components/pages/interact/Developers";
import content from "/content/pages/interact/developers.yaml";
import Seo from "../../components/SEO";
import seoContent from "/content/transversals/seo.yaml";

export default function InteractDevelopers({ data }) {
  return (
    <Layout
      location={"developers"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withPartners={false}
    >
      <Developers />
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

export const Head = () => <Seo content={seoContent.developers} />;
