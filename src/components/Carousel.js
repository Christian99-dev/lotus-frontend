import React from "react";
import styled from "styled-components";
import TextWithBackground from "../components/Global/TextWithBackground";
import SpaceWrapper from "../utils/SpaceWrapper";
import Button from "../components/Global/Button";
import bgImg from "../media/images/img1.png";
import bgFilter from "../media/images/grey.png";

export default function Carousel() {
  return (
    <CarouselWrapper bgImg={bgImg} bgFilter={bgFilter}>
      <TextWithBackground
        className="text1"
        text="Notfall? Rufen Sie uns Jetzt an!"
        fontSize="1"
        color="purple"
        spacing={{ top: 200, bottom: 5 }}
      />
      <TextWithBackground
        className="text2"
        text="01573 / 13485"
        fontSize="2"
        color="purple"
        spacing={{ bottom: 40 }}
      />
      <SpaceWrapper className="buttons" spacing={{ bottom: 200 }}>
        <Button text="Leistungen" color="purple" />
        <Button text="Über Uns" />
      </SpaceWrapper>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  background: center / cover no-repeat url(${props => props.bgFilter}) , center / cover no-repeat url(${props => props.bgImg});

  .text1,
  .text2 {
    text-align: center;
  }
  .buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;
