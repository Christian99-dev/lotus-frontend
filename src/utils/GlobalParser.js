import { graphql, useStaticQuery } from "gatsby";

const strapiGlobal = useStaticQuery(graphql`
  {
    strapiGlobal {
      name: Name
      nummer: Nummer
      oeffnungszeiten: Oeffnungszeiten
      plzOrt: PlzOrt
      strasseHausnummer: StrasseHausnummer
      volleAdresse: VolleAdresse
      whatsappLink: WhatsappLink
      email: Email
    }
  }
`);

export default () => strapiGlobal;
