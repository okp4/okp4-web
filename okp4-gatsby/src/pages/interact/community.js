import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import JoinUs from "../../components/pages/interact/community/JoinUs";
import LatestNews from "../../components/pages/interact/community/LatestNews";
import content from "/content/pages/interact/community.yaml";
import Seo from "../../components/SEO";

export default function Community({ data }) {
  return (
    <Layout
      location={"community"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withPartners={false}
    >
      <JoinUs files={data} />
      <LatestNews posts={data.mediumPosts.edges} />
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

export const Head = () => <Seo></Seo>;
