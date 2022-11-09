import React from "react";
import Title from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import Icon from "../components/Global/Icon";
import Scrollbar from "../theme/scrollbar";
import AnimationSvg from "./Global/AnimationSvg";
import { Parallax } from "react-parallax";

export default function Cards() {
  return (
    <CardsWrapper
      spacing={{
        left: "border",
        right: "border",
        top: "white-component-inner-half",
        bottom: "white-component-inner",
      }}
    >
      <Parallax
        style={{ position: "static" }}
        renderLayer={(percentage) => <Bubbels percentage={percentage} />}
        strength={200}
      />
      <Title
        center
        text="Unsere Leistung"
        spacing={{ bottom: "white-component-inner-half" }}
        color="purple"
      />
      <div className="cards">
        <Card
          text="Loremsss ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accu asopdion aion asoin"
          title="Reinigen"
          icon="drop"
        />
        <Card
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accu asopdion aion asoin"
          title="Reinigen"
          icon="sync"
        />
        <Card
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu"
          title="Reinigen"
          icon="wrench"
        />
      </div>
    </CardsWrapper>
  );
}

const CardsWrapper = styled(SpaceWrapper)`
  position: relative;
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 5%;
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
  padding: 50px;
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
    /* height: 150px; */
    /* overflow: hidden; */
    /* overflow-y: scroll; */
    /* ${Scrollbar("2px")} */
  }

  .icon {
    /* justify-content: flex-end; */
    display: block;
    margin: 0 auto;
    margin-top: auto;
  }
`;

const Bubbels = ({percentage}) => {
  percentage -= 0.5;
  return (
    <>
      <AnimationSvg illu="circle" shiftY={percentage} shiftStrenghtY={10} size={200} top="55%" left="8%" />
      <AnimationSvg illu="circle" shiftY={percentage} shiftStrenghtY={20} size={70} top="75%" left="8%" />
      <AnimationSvg illu="circle" shiftY={percentage} shiftStrenghtY={10} size={100} top="20%" left="57%" front/>
      <AnimationSvg illu="circle" shiftY={percentage} shiftStrenghtY={30} size={50} top="20%" left="60%" />
      <AnimationSvg illu="circle" shiftY={percentage} shiftStrenghtY={10} top="5%" left="90%"/>
    </>
  );
};
