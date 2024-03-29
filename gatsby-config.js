/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Illustration Hunt`,
    description: `More than 30+ sites to look for free illustrations. New Illustration websites are added every day. In short one place to look for sites offering free illustrations.`,
    author: `Gilbish Kosma`,
    url: "https://illustrationhunt.com",
    image: "/static/1.png",
  },
  plugins: [
      `gatsby-plugin-emotion`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: `src/posts/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `src/images/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `postimages`,
          path: `src/posts/`,
        },
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`, //it processes images in markdown so they can be used in the production build.
              options: {
                maxWidth: 1000,
              },
            },
          ],
        },
      },
      {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-158643512-2",
        head:true
      },
      },
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IllustrationHunt`,
        short_name: `IllustrationHunt`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `src/pages/`,
        },
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
    ]
}
