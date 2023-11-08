import React from "react";
import { size } from "../../theme/breakpoints";
import useWindowDimensions from "../../utils/useWindowDimensions";
import NavbarDekstop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { graphql, useStaticQuery } from "gatsby";

const Navbar = ({ fetchData, fetchNavigationData, fetchUnternehmenData }) => {
  const { strapiWillkommen, strapiGlobal, strapiHeader } =
    useStaticQuery(graphql`
      {
        strapiWillkommen {
          hintergrund: Hintergrund {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          hintergrundMobile: HintergrundMobile {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        strapiGlobal {
          logo: Logo {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        strapiHeader {
          links: Links {
            globalID
          }
          rechts: Rechts {
            global: Global {
              globalID
            }
            icon: Icon {
              iconID
            }
          }
        }
      }
    `);

  return useWindowDimensions().width > size.tablet ? (
    <NavbarDekstop
      strapiWillkommen={strapiWillkommen}
      strapiHeader={strapiHeader}
    />
  ) : (
    <NavbarMobile
      fetchData={fetchData}
      fetchNavigationData={fetchNavigationData}
      fetchUnternehmenData={fetchUnternehmenData}
    />
  );
};
export default Navbar;
