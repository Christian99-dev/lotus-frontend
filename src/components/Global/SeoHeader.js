import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const SeoHeader = ({ endung, children }) => {
  const { strapiSeo } = useStaticQuery(graphql`
    query {
      strapiSeo {
        webseitenTitel: WebseitenTitel
        webseitenUrl: WebseitenUrl
        impressumUndDatenschutz: ImpressumUndDatenschutz {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        index: Homepage {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        agb: Agb {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        favicon {
          localFile {
            url
          }
        }
      }
    }
  `);

  const { webseitenUrl, webseitenTitel, favicon } = strapiSeo;
  console.log(strapiSeo)
  const can = endung !== "index" ? webseitenUrl + "/" + endung : webseitenUrl

  return (
    <>
      <title>
        {strapiSeo[endung].title} | {webseitenTitel}
      </title>
      <meta name="description" content={strapiSeo[endung].desc} />
      <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
      <link rel="icon" href={favicon.localFile.url} />
      <link rel="canonical" href={can} />
      {children}
    </>
  );
};
