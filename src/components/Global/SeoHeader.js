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
  const can = endung !== "index" ? webseitenUrl + "/" + endung : webseitenUrl;

  return (
    <>
      <title>
        {strapiSeo[endung].title} | {webseitenTitel}
      </title>
      <script
        rel="preconnect"
        id="usercentrics-cmp"
        async
        data-eu-mode="true"
        data-settings-id="kQjO-dCNKLdpsJ"
        src="https://app.eu.usercentrics.eu/browser-ui/latest/loader.js"
      ></script>

      <script
        rel="preconnect"
        type="application/javascript"
        src="https://sdp.eu.usercentrics.eu/latest/uc-block.bundle.js"
      ></script>
      <meta name="description" content={strapiSeo[endung].desc} />
      <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
      <link rel="icon" href={favicon.localFile.url} />
      <link rel="canonical" href={can} />
      {children}
    </>
  );
};
