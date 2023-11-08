import { graphql, useStaticQuery } from "gatsby";

function useGlobalData() {
  const { strapiGlobal } = useStaticQuery(graphql`
    {
      strapiGlobal {
        Name
        Nummer
        Oeffnungszeiten
        PlzOrt
        StrasseHausnummer
        VolleAdresse
        WhatsappLink
        Email
        logo: Logo {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        logoOhneText: LogoOhneText {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        qrCode: WhatsappQRCode {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  return { parse: (globalID) => strapiGlobal[globalID], data: strapiGlobal };
}

export default useGlobalData;
