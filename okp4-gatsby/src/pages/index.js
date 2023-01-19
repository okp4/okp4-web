import * as React from "react";
import { Script } from "gatsby";
import Layout from "../components/Layout";
import Landing from "../components/pages/index/Landing";
import Introduction from "../components/pages/index/Introduction";
import Video from "../components/pages/index/Video";
import Universe from "../components/pages/index/Universe";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Layout location={"homepage"}>
      <AnalyticsScript />
      <Landing />
      <Introduction />
      <Video />
      <Universe />
    </Layout>
  );
}

export const Head = () => <SEO></SEO>;

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
