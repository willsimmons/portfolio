require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Will Simmons - Software Engineer',
    author: 'Will Simmons',
    description: 'A Gatsby.js Portfolio Site based on Forty by HTML5 UP',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENT_ID}` || '',
        accessToken: `${process.env.CONTENT_TOKEN}` || '',
      },
    },
      {
          resolve: `gatsby-plugin-favicon`,
          options: {
              logo: "./src/assets/images/favicon.png",
              injectHTML: true,
              icons: {
                  android: true,
                  appleIcon: true,
                  appleStartup: true,
                  coast: false,
                  favicons: true,
                  firefox: true,
                  twitter: false,
                  yandex: false,
                  windows: false
              }
          }
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}