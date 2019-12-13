module.exports = {
  siteMetadata: {
    title: `Rafaela Silva`,
    description: `Always a learner!`,
    siteUrl: `https://rafaelasilva.netlify.com`,
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
        background_color: `#554e63`,
        theme_color: `#1a1a1a`,
        display: `standalone`,
      },
    },
    `gatsby-theme-awesomeness`,
  ],
}
