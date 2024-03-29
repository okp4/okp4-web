/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/videos`,
        name: "videos",
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/favicon-blue.webp",
        name: `OKP4`,
        short_name: `OKP4`,
        start_url: `/`,
        background_color: `#002131`,
        theme_color: `#002131`,
        lang: `en`,
      },
    },
    {
      resolve: "gatsby-source-medium",
      options: {
        username: "okp4",
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://okp4.matomo.cloud",
        siteUrl: "https://okp4.network",
        matomoPhpScript: "matomo.php",
        matomoJsScript: "matomo.js",
      },
    },
  ],
};
