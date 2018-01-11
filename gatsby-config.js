require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        staticFileGlobs: [
          `public/**/*.{js,woff2}`,
          `public/index.html`,
          `public/cv/index.html`,
          `public/manifest.json`,
          `public/offline-plugin-app-shell-fallback/index.html`,
        ],
      },
    },
  ],
};
