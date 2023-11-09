import React from "react";
import styled from "styled-components";
import TextWithBackground from "../components/Global/TextWithBackground";
import SpaceWrapper from "../utils/SpaceWrapper";
import Button from "../components/Global/Button";
import { device, size } from "../theme/breakpoints";
import useWindowDimensions from "../utils/useWindowDimensions";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useGlobalData from "../utils/useGlobalData";

export default function Carousel() {
  const { hintergrund, hintergrundMobile, untertitel, titel } =
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
          untertitel: Untertitel {
            globalID
          }
          titel: Titel {
            globalID
          }
        }
      }
    `).strapiWillkommen;

  const {
    data: { logo },
    parse,
  } = useGlobalData();

  return (
    <CarouselWrapper id="carousel">
      {useWindowDimensions().width > size.tablet ? (
        <GatsbyImage
          image={getImage(hintergrund.localFile)}
          alt={hintergrund.alternativeText}
          className="bg-img"
        />
      ) : (
        <GatsbyImage
          image={getImage(hintergrundMobile.localFile)}
          alt={hintergrundMobile.alternativeText}
          className="bg-img"
        />
      )}

      <div className="filter"></div>
      <SpaceWrapper
        spacing={{
          top: "carousel-inner",
        }}
        className="logo-mobile"
      >
        <GatsbyImage
          image={getImage(logo.localFile)}
          alt={logo.alternativeText}
          className="logo-mobile"
        />
      </SpaceWrapper>
      <TextWithBackground
        className="text1"
        text={parse(titel.globalID)}
        fontSize="1"
        color="purple"
        spacing={{
          top: "carousel-inner",
          bottom: "carousel-inner-2",
          left: "border",
          right: "border",
        }}
        transparent
      />
      <TextWithBackground
        className="text2"
        text={parse(untertitel.globalID)}
        fontSize="2"
        color="purple"
        spacing={{ bottom: "carousel-inner-3" }}
        transparent
      />
      <SpaceWrapper className="buttons" spacing={{ bottom: "carousel-inner" }}>
        <Button text="Leistungen" color="purple" to="cards" />
        <Button text="Kontakt" to="contact" />
      </SpaceWrapper>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled(SpaceWrapper)`
  position: relative;
  .logo-mobile {
    display: none;
    img{
      margin: 0 auto;
      height: var(--navbar-logo-height);
      width: auto;
    }
    @media ${device.tablet} {
      display: block;
    }
  }

  .bg-img {
    z-index: -100;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: 100%;
    object-fit: cover;
  }

  .filter {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: var(--background-filter-dark);
    z-index: -1;
  }
  .text1,
  .text2,
  .loader {
    text-align: center;
  }

  .loader {
    margin: 0 auto;
  }

  .buttons {
    display: flex;
    gap: var(--carousel-gap);
    justify-content: center;
  }

  @media ${device.tablet} {
    padding-top: 50.34px;
  }
  @media ${device.mobile} {
    padding-top: 47.47px;
  }
`;
