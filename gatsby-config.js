require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          placeholder: `blurred`,
          breakpoints: [411, 768, 1400, 1921],
        },
      },
    },
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        formats: ["woff2"],
        usePreload: true,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_BACKEND_URL,
        accessToken: process.env.GATSBY_BACKEND_API_TOKEN,
        singleTypes: [
          "agb",
          "formular-ausgangs-mail",
          "formular-popups",
          "global",
          "rechtliches",
          {
            singularName: "willkommen",
            queryParams: {
              populate: ["HintergrundMobile", "Hintergrund", "Titel", "Untertitel"],
            },
          },
          {
            singularName: "team",
            queryParams: {
              populate: ["Personen.Bild"],
            },
          },
          {
            singularName: "seo",
            queryParams: {
              populate: ["Homepage", "ImpressumUndDatenschutz", "favicon", "Agb"],
            },
          },
          {
            singularName: "rezensionen",
            queryParams: {
              populate: ["Rezensionen.Bild"],
            },
          },
          {
            singularName: "philosophie",
            queryParams: {
              populate: ["Hintergrund"],
            },
          },
          {
            singularName: "leistungen",
            queryParams: {
              populate: [
                "Leistungen.Video",
                "Leistungen.Hintergrund",
                "Leistungen.Icon",
              ],
            },
          },
          {
            singularName: "kontakt",
            queryParams: {
              populate: [
                "Hintergrund",
                "InformationsZeilen.Global",
                "InformationsZeilen.Icon",
              ],
            },
          },
          {
            singularName: "header",
            queryParams: {
              populate: ["Rechts.Global", "Rechts.Icon", "Links"],
            },
          },
          {
            singularName: "footer",
            queryParams: {
              populate: [
                "KontaktSpalte.Global",
                "KontaktSpalte.Icon",
                "AdressSpalte",
              ],
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: ["Logo", "LogoOhneText", "WhatsappQRCode"],
            },
          },
        ],
      },
    },
  ],
};
