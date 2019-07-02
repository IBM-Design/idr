const { PATH_PREFIX = "/" } = process.env;

module.exports = {
  pathPrefix: PATH_PREFIX,
  __experimentalThemes: [{ resolve: "gatsby-theme-carbon", options: {} }],
  siteMetadata: {
    title: "IBM Design Research",
    description:
      "IBM Design Research helps teams uncover insights and inform the experiences we create for people. It is at the heart of Enterprise Design thinking.",
    keywords:
      "IBM, design, research, design research, design thinking, human-centered design, interviewing, user research, interviews, user experience research, service design, ux research, design strategy, people, practice, observation, user interviews, anthropology"
  },

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
        include_favicon: false,
        icons: [
          {
            src: `/src/images/icons/Rebus144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/src/images/icons/Rebus192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/src/images/icons/Rebus256.png`,
            sizes: `256x256`,
            type: `image/png`
          },
          {
            src: `/src/images/icons/Rebus384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `/src/images/icons/Rebus48.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/src/images/icons/Rebus512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
          {
            src: `/src/images/icons/Rebus72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `/src/images/icons/Rebus96.png`,
            sizes: `96x96`,
            type: `image/png`
          }
        ] // Add or remove icon sizes as desired
      }
    }
  ]
};
