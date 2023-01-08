import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextWithBackground from "../components/Global/TextWithBackground";
import SpaceWrapper from "../utils/SpaceWrapper";
import Button from "../components/Global/Button";
import bgimg from "../media/images/img1.png";
import { device } from "../theme/breakpoints";

export default function Carousel({fetchData}) {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
    })
  }, [])

  const {subtext, text} = data ? data : {subtext : "" , text:""};
  
  return (
    <CarouselWrapper id="carousel">
      <div className="filter">
        <TextWithBackground
          className="text1"
          text={text}
          fontSize="1"
          color="purple"
          spacing={{ top: "carousel-inner", bottom: "carousel-inner-2", left:"border", right:"border" }}
        />
        <TextWithBackground
          className="text2"
          text={subtext}
          fontSize="2"
          color="purple"
          spacing={{ bottom: "carousel-inner-3" }}
        />
        <SpaceWrapper
          className="buttons"
          spacing={{ bottom: "carousel-inner" }}
        >
          <Button text="Leistungen" color="purple" to="cards" />
          <Button text="Kontakt" to="contact" />
        </SpaceWrapper>
      </div>
    </CarouselWrapper>
  )
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
