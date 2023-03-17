module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Lotus Entwaesserungstechnik`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
  ],
};
