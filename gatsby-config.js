module.exports = {
  __experimentalThemes: [{ resolve: "gatsby-theme-carbon", options: {} }],
  siteMetadata: {
    title: "IBM Design Research",
    description:
      "IBM Design Research helps teams uncover insights and inform the experiences we create for people. It is at the heart of Enterprise Design thinking.",
    keywords:
      "IBM, design, research, design research, design thinking, human-centered design, interviewing, user research, interviews, user experience research, service design, ux research, design strategy, people, practice, observation, user interviews, anthropology"
  },
  pathPrefix: "/design/research",

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IBM Design Research`,
        short_name: `IBM Design Research`,
        start_url: `/`,
        background_color: `#171717`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        include_favicon: false
      }
    }
  ]
};
