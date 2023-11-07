// const { agb, ueberschrift } = useStaticQuery(graphql`
//   {
//     strapiAgb {
//       agb: AGB
//       ueberschrift: Ueberschrift
//     }
//   }
// `).strapiAgb;

// const { adressSpalte, kontaktSpalte } = useStaticQuery(graphql`
//   {
//     strapiFooter {
//       adressSpalte: AdressSpalte {
//         globalID
//       }
//       kontaktSpalte: KontaktSpalte {
//         global: Global {
//           globalID
//         }
//         icon: Icon {
//           iconID
//         }
//       }
//     }
//   }
// `).strapiFooter;

// const { betreff, empfaenger, format } = useStaticQuery(graphql`
//   {
//     strapiFormularAusgangsMail {
//       betreff: Betreff
//       empfaenger: Empfaenger
//       format: NachrichtenFormat
//     }
//   }
// `).strapiFormularAusgangsMail;

// const {
//   bitteWartenPopup,
//   emailPopup,
//   emailUngueltigPopup,
//   fehlerPopup,
//   nachnamePopup,
//   nachrichtAbgeschicktPopup,
//   nachrichtPopup,
//   plzOrtPopup,
//   strasseHausnummerPopup,
//   telefonnummerPopup,
//   vornamePopup,
// } = useStaticQuery(graphql`
//   {
//     strapiFormularPopups {
//       bitteWartenPopup: BitteWartenPopup
//       emailPopup: EmailPopup
//       emailUngueltigPopup: EmailUngueltigPopup
//       fehlerPopup: FehlerPopup
//       nachnamePopup: NachnamePopup
//       nachrichtAbgeschicktPopup: NachrichtAbgeschicktPopup
//       nachrichtPopup: NachrichtPopup
//       plzOrtPopup: PlzOrtPopup
//       strasseHausnummerPopup: StrasseHausnummerPopup
//       telefonnummerPopup: TelefonnummerPopup
//       vornamePopup: VornamePopup
//     }
//   }
// `).strapiFormularPopups;

// const {
//   logo,
//   logoOhneText,
//   qrCode,
//   name,
//   nummer,
//   oeffnungszeiten,
//   plzOrt,
//   strasseHausnummer,
//   volleAdresse,
//   whatsappLink,
//   email,
// } = useStaticQuery(graphql`
//   {
//     strapiGlobal {
//       logo: Logo {
//         alternativeText
//         localFile {
//           alternativeText
//           childImageSharp {
//             gatsbyImageData(layout: CONSTRAINED)
//           }
//         }
//       }
//       logoOhneText: LogoOhneText {
//         alternativeText
//         localFile {
//           alternativeText
//           childImageSharp {
//             gatsbyImageData(layout: CONSTRAINED)
//           }
//         }
//       }
//       qrCode: WhatsappQRCode {
//         alternativeText
//         localFile {
//           alternativeText
//           childImageSharp {
//             gatsbyImageData(layout: CONSTRAINED)
//           }
//         }
//       }
//       name: Name
//       nummer: Nummer
//       oeffnungszeiten: Oeffnungszeiten
//       plzOrt: PlzOrt
//       strasseHausnummer: StrasseHausnummer
//       volleAdresse: VolleAdresse
//       whatsappLink: WhatsappLink
//       email: Email
//     }
//   }
// `).strapiGlobal;

// const { links, rechts } = useStaticQuery(graphql`
//   {
//     strapiHeader {
//       links: Links {
//         globalID
//       }
//       rechts: Rechts {
//         global: Global {
//           globalID
//         }
//         icon: Icon {
//           iconID
//         }
//       }
//     }
//   }
// `).strapiHeader;

// const {
//   button,
//   emailPlatzhalter,
//   googleMapsLink,
//   nachnamePlatzhalter,
//   nachrichtPlatzhalter,
//   nummerPlatzhalter,
//   plzOrtPlatzhalter,
//   strasseHausnummerPlatzhalter,
//   subUeberschrift,
//   ueberschrift,
//   vornamePlatzhalter,
//   hintergrund,
//   informationsZeilen,
// } = useStaticQuery(graphql`
//   {
//     strapiKontakt {
//       button: Button
//       emailPlatzhalter: EmailPlatzhalter
//       googleMapsLink: GoogleMapsLink
//       nachnamePlatzhalter: NachnamePlatzhalter
//       nachrichtPlatzhalter: NachrichtPlatzhalter
//       nummerPlatzhalter: NummerPlatzhalter
//       plzOrtPlatzhalter: PlzOrtPlatzhalter
//       strasseHausnummerPlatzhalter: StrasseHausnummerPlatzhalter
//       subUeberschrift: SubUeberschrift
//       ueberschrift: Ueberschrift
//       vornamePlatzhalter: VornamePlatzhalter
//       hintergrund: Hintergrund {
//         alternativeText
//         localFile {
//           childImageSharp {
//             gatsbyImageData(layout: CONSTRAINED)
//           }
//         }
//       }
//       informationsZeilen: InformationsZeilen {
//         Global {
//           globalID
//         }
//         Icon {
//           iconID
//         }
//       }
//     }
//   }
// `).strapiKontakt;

// const { ueberschrift, leistungen } = useStaticQuery(graphql`
//   {
//     strapiLeistungen {
//       ueberschrift: Ueberschrift
//       leistungen: Leistungen {
//         Hintergrund {
//           alternativeText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED)
//             }
//           }
//         }
//         text: Text
//         textVorschau: TextVorschau
//         ueberschrift: Ueberschrift
//         untertitel: Untertitel
//         icon: Icon {
//           iconID
//         }
//       }
//     }
//   }
// `).strapiLeistungen;

// const { text, ueberschrift, hintergrund } = useStaticQuery(graphql`
//   {
//     strapiPhilosophie {
//       text: Text
//       ueberschrift: Ueberschrift
//       hintergrund: Hintergrund {
//         alternativeText
//         localFile {
//           childImageSharp {
//             gatsbyImageData(layout: CONSTRAINED)
//           }
//         }
//       }
//     }
//   }
// `).strapiPhilosophie;

// const { datenschutzerklaerung, impressum, ueberschrift } =
//   useStaticQuery(graphql`
//     {
//       strapiRechtliches {
//         datenschutzerklaerung: Datenschutzerklaerung
//         impressum: Impressum
//         ueberschrift: Ueberschrift
//       }
//     }
//   `).strapiRechtliches;

// const { ueberschrift, rezensionen } = useStaticQuery(graphql`
//   {
//     strapiRezensionen {
//       ueberschrift: Ueberschrift
//       rezensionen: Rezensionen {
//         bewertung: Bewertung
//         name: Name
//         text: Text
//         bild: Bild {
//           alternativeText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED)
//             }
//           }
//         }
//       }
//     }
//   }
// `).strapiRezensionen;

// const { webseitenTitel, webseitenUrl, homepage, impressumUndDatenschutz } =
//   useStaticQuery(graphql`
//     {
//       strapiSeo {
//         webseitenTitel: WebseitenTitel
//         webseitenUrl: WebseitenUrl
//         homepage: Homepage {
//           SeitenBeschreibung
//           SeitenTitel
//         }
//         impressumUndDatenschutz: ImpressumUndDatenschutz {
//           SeitenBeschreibung
//           SeitenTitel
//         }
//       }
//     }
//   `).strapiSeo;

// const { ueberschrift, personen } = useStaticQuery(graphql`
//   {
//     strapiTeam {
//       ueberschrift: Ueberschrift
//       personen: Personen {
//         berufsbezeichnung: Berufsbezeichnung
//         beschreibung: Beschreibung
//         name: Name
//         bild: Bild {
//           alternativeText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED)
//             }
//           }
//         }
//       }
//     }
//   }
// `).strapiTeam;

// const { hintergrund, hintergrundMobile, untertitel, titel } =
//   useStaticQuery(graphql`
//     {
//       strapiWillkommen {
//         hintergrund: Hintergrund {
//           alternativeText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED)
//             }
//           }
//         }
//         hintergrundMobile: HintergrundMobile {
//           alternativeText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED)
//             }
//           }
//         }
//         untertitel: Untertitel {
//           globalID
//         }
//         titel: Titel {
//           globalID
//         }
//       }
//     }
//   `).strapiWillkommen;
