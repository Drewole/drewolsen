const path = require(`path`)

module.exports = {
  siteMetadata: {
    title:
      "Drew Olsen - A Designer that can develop websites from the ground up.",
    author: "Drew Olsen",
    description:
      "A Multi-faceted Front-End Web Developer with design skills... And an unhealthy fondness for Montserrat.",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectImages`,
        path: path.join(__dirname, `data`, `projects`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat`],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
