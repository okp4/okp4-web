import * as React from "react";
import { graphql } from "gatsby";
import Contact from "../components/pages/contact/Contact";
import Layout from "../components/Layout";
import content from "/content/pages/contact/contact.yaml";
import Seo from "../components/SEO";
import seoContent from "/content/transversals/seo.yaml";

export default function ContactPage({ data }) {
  return (
    <Layout
      location={"contact"}
      files={data}
      breadcrumbs={content.breadcrumbs}
      isStatic
      withDocs={false}
      withAssociates={false}
      withPartners={false}
    >
      <Contact />
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

export const Head = () => <Seo content={seoContent.contact} />;
