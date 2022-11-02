import React from "react";
import styled from "styled-components";
import Person from "./Global/Person";
import img1 from "./../media/images/person1.png";
import img2 from "./../media/images/person2.png";
import Titel from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";

export default function Team() {
  return (
    <TeamWrapper>
      <Titel
        center
        text="Das Team"
        spacing={{ top: 100, bottom: 100 }}
        color="purple"
      />
      <SpaceWrapper spacing={{ bottom: 200 }} className="container">
        <Person
          className="person"
          img={img1}
          text="aoifusb azubaus daius bdaiuasdjk asd naois dnaoisd naosid naosid nasodi naosdi nasodi nasod in naosid nasonaosid nasodi naosdi nasodi nasod indi naosdi nasodi nasod in"
          jobTitle="Klempner"
          name="Max Mustermann"
        />
        <Person
          className="person"
          img={img2}
          text="aoifusb azubaus daius bdaiuasdjk asd naois dnaoisd naosid naosid nasodi naosdi nasodi nasod in naosid nasodi naosdi nasodi nasod in wrwes"
          jobTitle="Klempner"
          name="Max Mustermann"
          right
        />
      </SpaceWrapper>
    </TeamWrapper>
  );
}

const TeamWrapper = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10%;
    margin: 0 var(--border);
    .person {
      flex: 1 1 0;
    }
  }
`;
