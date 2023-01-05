import React from "react";
import Title from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import Icon from "../components/Global/Icon";
import Bubbels from "./Effects/Bubbels";
import { device, size } from "../theme/breakpoints";
import useWindowDimensions from "../utils/useWindowDimensions";
import MySwiper from "../components/Global/MySwiper";

const Cards = ({ ...props }) => {
  const cardsJSX = [
    <Card
      text="Loremsss ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accu asopdion aion asoin"
      title="Reinigen"
      icon="drop"
    />,
    <Card
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accu asopdion aion asoin"
      title="Reinigen"
      icon="sync"
    />,
    <Card
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu"
      title="Reinigen"
      icon="wrench"
    />,
  ];

  return (
    <CardsWrapper
      id="cards"
      spacing={{
        top: "white-component-inner-half",
        bottom: "white-component-inner",
      }}
      {...props}
    >
      <Bubbels />
      <Title
        center
        text="Unsere Leistung"
        spacing={{ bottom: "white-component-inner-half" }}
        color="purple"
      />
      {useWindowDimensions().width > size.tablet ? (
        <SpaceWrapper
          spacing={{ left: "border", right: "border" }}
          className="cards"
        >
          {cardsJSX.map((child) => child)}
        </SpaceWrapper>
      ) : (
        <MySwiper array={cardsJSX} cards />
      )}
    </CardsWrapper>
  );
};

const CardsWrapper = styled(SpaceWrapper)`
  position: relative;

  .cards {
    display: flex;
    justify-content: space-between;
    gap: var(--cards-gap);

    @media ${device.laptop} {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

function Card({ title, text, icon }) {
  return (
    <CardWrapper>
      <div className="title">{title}</div>
      <SpaceWrapper spacing={{ top: 20, bottom: 20 }} margin className="text">
        {text}
      </SpaceWrapper>
      <Icon name={icon} height="icon-l" color="purple" className="icon" />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background: var(--secondary);
  padding: var(--cards-inner);
  border-radius: 20px;
  color: var(--primary);
  display: flex;
  flex-basis: 23%;
  flex-direction: column;

  .title {
    font-size: var(--fs-2);
    text-align: left;
    font-weight: var(--semibold);
  }
  .text {
    font-size: var(--fs-4);
    font-weight: var(--medium);
  }

  .icon {
    display: block;
    margin: 0 auto;
    margin-top: auto;
  }

  @media ${device.laptop} {
    margin: 0 var(--border);
    max-width: var(--cards-max-width-tablet);
    margin-left: 10%;

    :nth-child(2) {
      margin-left: auto;
      margin-right: 10%;
    }
  }

  @media ${device.tablet} {
    flex-basis: 100%;
  }
`;

export default Cards;
