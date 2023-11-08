import React from "react";
import { size } from "../../theme/breakpoints";
import useWindowDimensions from "../../utils/useWindowDimensions";
import NavbarDekstop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { graphql, useStaticQuery } from "gatsby";

const Navbar = () => {
  const { strapiWillkommen, strapiHeader } =
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
      strapiHeader={strapiHeader}
    />
  );
};
export default Navbar;
