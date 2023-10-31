import * as React from "react";
import { graphql } from "gatsby";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/index.scss";
import LegalConditions from "../components/pages/legal/AmbassadorLegalMentions";
import Seo from "../components/SEO";
import seoContent from "/content/transversals/seo.yaml";
import Halo from "../components/animations/Halo";

export default function AmbassadorProgramConditions({ data }) {
  return (
    <>
      <Preloader />
      <Halo />
      <Header isPositionFixed />
      <main className="legalMentions">
        <LegalConditions />
      </main>
      <Footer
        files={data}
        withDocs={false}
        withPartners={false}
      />
    </>
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

export const Head = () => <Seo content={seoContent.legalMentions} />;
