import * as React from "react";
import { Script, graphql } from "gatsby";
import Layout from "../components/Layout";
import Landing from "../components/pages/index/Landing";
import Introduction from "../components/pages/index/Introduction";
import Video from "../components/pages/index/Video";
import Universe from "../components/pages/index/Universe";
import Seo from "../components/SEO";
import seoContent from "/content/transversals/seo.yaml";

export default function Home({ data }) {
  return (
    <Layout location={"homepage"} files={data}>
      <AnalyticsScript />
      <Landing files={data} />
      <Introduction files={data} />
      <Video files={data} />
      <Universe files={data} />
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
    allVideos: allFile(filter: { extension: { in: ["mp4", "ogg", "webm"] } }) {
      edges {
        node {
          id
          relativePath
          publicURL
        }
      }
    }
  }
`;

export const Head = () => <Seo content={seoContent.homePage} />;

const AnalyticsScript = () => (
  <Script>
    {`
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="https://okp4.matomo.cloud/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '1']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src='//cdn.matomo.cloud/okp4.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
    })();
  `}
  </Script>
);
