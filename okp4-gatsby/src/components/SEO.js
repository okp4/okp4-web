import React from "react";

const SEO = ({ content }) => {
  const { title } = content;

  return (
    <>
      <title>{`OKP4 - ${title}`}</title>
      <meta
        name="description"
        content="
        OKP4 is an ever-expanding universe of applications powered by shared digital resources."
      />
      <meta name="image" content="/images/twitter.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="OKP4 - The Open Knowledge Protocol" />
      <meta name="twitter:url" content="https://twitter.com/OKP4_Protocol" />
      <meta
        name="twitter:description"
        content="OKP4 is an ever-expanding universe of applications powered by shared digital resources."
      />
      <meta name="twitter:image" content="/images/twitter.jpg" />
      <meta name="twitter:creator" content="@OKP4_Protocol" />
    </>
  );
};

export default SEO;
