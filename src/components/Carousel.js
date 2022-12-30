import React from "react";
import styled from "styled-components";
import TextWithBackground from "../components/Global/TextWithBackground";
import SpaceWrapper from "../utils/SpaceWrapper";
import Button from "../components/Global/Button";
import bgimg from "../media/images/img1.png";
import { device } from "../theme/breakpoints";

export default function Carousel({ ...props }) {
  return (
    <CarouselWrapper {...props} id="carousel">
      <div className="filter">
        <TextWithBackground
          className="text1"
          text="Notfall? Rufen Sie uns Jetzt an!"
          fontSize="1"
          color="purple"
          spacing={{ top: "carousel-inner", bottom: "carousel-inner-2", left:"border", right:"border" }}
        />
        <TextWithBackground
          className="text2"
          text="01573 / 13485"
          fontSize="2"
          color="purple"
          spacing={{ bottom: "carousel-inner-3" }}
        />
        <SpaceWrapper
          className="buttons"
          spacing={{ bottom: "carousel-inner" }}
        >
          <Button text="Leistungen" color="purple" />
          <Button text="Über Uns" />
        </SpaceWrapper>
      </div>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled(SpaceWrapper)`
  @media ${device.tablet} {
    padding-top: 50.34px;
  }
  @media ${device.mobile} {
    padding-top: 47.47px;
  }

  background-image: url(${bgimg});
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  .filter {
    background-color: var(--background-filter-dark);
  }

  .text1,
  .text2 {
    text-align: center;
  }

  .buttons {
    display: flex;
    gap: var(--carousel-gap);
    justify-content: center;
  }
`;
