import React from "react";
import Title from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import Icon from "../components/Global/Icon";

export default function Cards() {
  return (
    <CardsWrapper spacing={{left: "border", right: "border", top: 100, bottom: 200}}>
      <Title
        center
        text="Unsere Leistung"
        spacing={{ bottom: 100 }}
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
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
`;


function Card({ title, text, icon }) {
  return (
    <CardWrapper>
      <div className="title">{title}</div>
      <SpaceWrapper spacing={{top: 20, bottom: 20}} margin className="text scrollbar1">
        {text}
      </SpaceWrapper>
      <Icon name={icon} height="50px" color="purple" className="icon" />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background: var(--secondary);
  padding: 50px;
  border-radius: 20px;
  color: var(--primary);
  flex-basis: 23%;
  

  .title {
    font-size: var(--fs-2);
    text-align: left;
    font-weight: var(--semibold);
  }
  .text {
    font-size: var(--fs-4);
    font-weight: var(--medium);
    height: 150px;
    overflow: hidden;
    overflow-y: scroll;
  }

  .icon{
    display: block;
    margin: 0 auto;
  }
`;
