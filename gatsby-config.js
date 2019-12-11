module.exports = {
  siteMetadata: {
    title: `Rafaela Silva`,
    description: `Always a lerner!`,
    siteUrl: `https://rafaelalsilva.com`,
    social: {
      twitter: `https://twitter.com/Rafa_ela3`,
      github: `https://github.com/irafaelasilva`,
      blog: `https://medium.com/@rafalucy3`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rafaela`,
        short_name: `Rafaela`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1a1a1a`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-theme-awesomeness`,
  ],
}
