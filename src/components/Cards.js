import React from "react";
import Card from "./Global/Card";
import Title from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";

export default function Cards() {
  return (
    <CardsWrapper>
      <Title
        center
        text="Unsere Leistung"
        spacing={{ top: 100, bottom: 100 }}
        color="purple"
      />
      <SpaceWrapper className="cards" spacing={{ bottom: 200 }}>
        <Card
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accu asopdion aion asoin"
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
      </SpaceWrapper>
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  .cards {
    display: flex;
    margin: 0 var(--border);
    justify-content: space-between;
    gap: 40px;
  }
`;
