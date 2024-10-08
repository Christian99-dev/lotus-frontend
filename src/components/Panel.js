import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Titel from "./Global/Titel";
import { device, size } from "../theme/breakpoints";
import { Parser } from "../utils/utils";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useGlobalData from "../utils/useGlobalData";
import Parallax from "./Global/Parallax";
import useWindowDimensions from "../utils/useWindowDimensions";

export default function Panel() {
  const { text, ueberschrift, hintergrund } = useStaticQuery(graphql`
    {
      strapiPhilosophie {
        text: Text
        ueberschrift: Ueberschrift
        hintergrund: Hintergrund {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `).strapiPhilosophie;

  const {
    data: { logoOhneText },
  } = useGlobalData();

  return (
    <PannelWrapper id="panel">
      <Parallax
        strength={size.tablet > useWindowDimensions().width ? 200 : 400}
      >
        <GatsbyImage
          image={getImage(hintergrund.localFile)}
          alt={hintergrund.alternativeText}
        />
      </Parallax>
      <SpaceWrapper className="box">
        <Titel text={ueberschrift} spacing={{ bottom: 50 }} />
        <div className="text" id="panel">
          <GatsbyImage
            image={getImage(logoOhneText.localFile)}
            alt={logoOhneText.alternativeText}
            className="logo"
          />
          {Parser(text, "p")}
        </div>
      </SpaceWrapper>
    </PannelWrapper>
  );
}

const PannelWrapper = styled.section`
   p{
    all: unset;
  }
  position: relative;
  .box {
    height: 100vh;
    width: 50%;
    box-sizing: border-box;
    padding: var(--pannel-inner) var(--border);
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    background-color: var(--primary-transparent);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text {
      .logo {
        top: 20%;
        left: 10%;
        position: absolute;
      }
      color: var(--secondary);
      font-size: var(--fs-3);
      font-weight: var(--light);
    }

    @media ${device.tablet} {
      height: unset;
      .center-loader {
        div {
          margin: 0 auto;
        }
      }
    }
  }

  @media ${device.laptop} {
    .box {
      width: 65%;
    }
  }

  @media ${device.tablet} {
    .react-parallax-bgimage {
      height: var(--pannel-height-mobile) !important;
    }
    height: var(--pannel-height-mobile);
    .box {
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
      width: 100%;
      .text {
        .logo {
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
          top: 10%;
          left: 0;
          right: 0;
          bottom: 0;
          max-width: 50%;
          img {
            height: auto;
          }
        }
        text-align: center;
      }
      .logo {
        left: 50%;
      }
    }
  }
`;
