module.exports = {
  siteMetadata: {
    title: `Rafaela Silva`,
    description: `Always a lerner!`,
    siteUrl: `https://github.com/irafaelasilva`,
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
    `gatsby-theme-awesomeness`,
  ],
}
