import { graphql, useStaticQuery } from "gatsby";

function useGlobalParser() {
  const {strapiGlobal} = useStaticQuery(graphql`
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
      }
    }
  `);

  return (globalID) => strapiGlobal[globalID];
}

export default useGlobalParser;
