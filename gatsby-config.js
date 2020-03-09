module.exports = {
  siteMetadata: {
    title: `Swanky`,
    description: `Luxury fashion video blogging app. Inspire the world with your fashion short video reviews.`,
    author: `Pipesort Technologies`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Droid Sans', 'Droid Serif', 'Roboto']
          }
        }
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Swanky`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon:`src/images/gatsby-icon.png`,
      },
    },

    {
        resolve: 'gatsby-plugin-google-marketing-platform',
        options: {
          optimize:{
              id: 'GTM-PH3XBJB'
          },
          dataLayer: {
            gaPropertyId: 'G-Z2Q5S2XBP3',
          }
        },
      }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
