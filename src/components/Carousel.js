import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextWithBackground from "../components/Global/TextWithBackground";
import SpaceWrapper from "../utils/SpaceWrapper";
import Button from "../components/Global/Button";
import defaultPurple from "../media/images/purple.png";
import { device, size } from "../theme/breakpoints";
import { createImgUrl } from "../utils/utils";
import useWindowDimensions from "../utils/useWindowDimensions";

export default function Carousel({ fetchData, fetchUnternehmenData }) {
  const [data, setData] = useState(null);
  const [logo, setLogo] = useState(null);
  const [background, setBackground] = useState(defaultPurple);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
      setBackground([
        createImgUrl(res.data.attributes.hintergrund.data.attributes.url),
        createImgUrl(res.data.attributes.hintergrundMobile.data.attributes.url),
      ]);
    });

    fetchUnternehmenData().then((res) => {
      setLogo(createImgUrl(res.data.attributes.logo.data.attributes.url));
    });
  }, [fetchData, fetchUnternehmenData]);

  return (
    <CarouselWrapper id="carousel">
      <img
        src={
          useWindowDimensions().width > size.tablet
            ? background[0]
            : background[1]
        }
        className="bg-img"
        alt="bg-img"
      ></img>

      <div className="filter"></div>
      <SpaceWrapper
        spacing={{
          top: "carousel-inner",
        }}
        className="logo-mobile"
      >
        <img src={logo} className="logo-mobile" alt="logo-mobile"></img>
      </SpaceWrapper>
      <TextWithBackground
        className="text1"
        text={data ? data.text.info : ""}
        fontSize="1"
        color="purple"
        spacing={{
          top:"carousel-inner",
          bottom: "carousel-inner-2",
          left: "border",
          right: "border",
        }}
        loading={!data}
        transparent
      />
      <TextWithBackground
        className="text2"
        text={data ? data.subtext.info : ""}
        fontSize="2"
        color="purple"
        spacing={{ bottom: "carousel-inner-3" }}
        loading={!data}
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
    @media ${device.tablet} {
      display: block;
    }

    margin: 0 auto;
    height: var(--navbar-logo-height);
  }

  .bg-img {
    z-index: -1;
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
