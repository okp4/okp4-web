import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import JoinUs from "../components/pages/community/JoinUs";
import LatestNews from "../components/pages/community/LatestNews";

export default function Community({ data }) {
  return (
    <Layout location={"community"} files={data}>
      <JoinUs />
      <LatestNews posts={data.mediumPosts.edges} />
    </Layout>
  );
}

// this down stays
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
          createdAt(formatString: "DD MMM")
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
