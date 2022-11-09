import React from "react";
import styled from "styled-components";
import img1 from "./../media/images/person1.png";
import img2 from "./../media/images/person2.png";
import Titel from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import TextWithBackground from "../components/Global/TextWithBackground";
import AnimationSvg from "./Global/AnimationSvg";

export default function Team() {
  return (
    <TeamWrapper
      spacing={{
        left: "border",
        right: "border",
        top: "white-component-inner-half",
        bottom: "white-component-inner",
      }}
    >
      <Titel
        center
        text="Das Team"
        spacing={{ bottom: "white-component-inner-half" }}
        color="purple"
      />
      <div className="container">
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
      </div>
    </TeamWrapper>
  );
}

const TeamWrapper = styled(SpaceWrapper)`
  position: absolute;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--team-gap);
    .person {
      flex: 1 1 0;
    }
  }
`;

function Person({ img, text, name, jobTitle, right, ...props }) {
  return (
    <PersonWrapper img={img} right={right} {...props}>
      <div className="img" />
      <SpaceWrapper className="info-box">
        <TextWithBackground
          spacing={{ bottom: 5 }}
          text={name}
          fontSize="2"
          className="name"
        />
        <TextWithBackground
          spacing={{ bottom: 15 }}
          text={jobTitle}
          fontSize="3"
        />
        <div className="text">{text}</div>
      </SpaceWrapper>
    </PersonWrapper>
  );
}

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.right ? "row-reverse" : "inherit")};

  .img {
    flex: 1 1 0;
    min-width: 250px;
    height: 500px;
    background: center / cover no-repeat url(${(props) => props.img});
  }

  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};
    padding: ${(props) => (props.right ? "0  50px  50px 0" : "50px 0 0 50px ")};
    text-align: ${(props) => (props.right ? "right" : "left")};
    flex: 1 1 0;

    .name {
      white-space: nowrap;
    }
    .text {
      font-size: var(--fs-4);
      color: var(--primary);
      font-weight: var(--medium);
    }
  }
`;

const Rectangles = ({percentage}) => {
  percentage -= 0.5;
  return (
    <>
      <AnimationSvg svg="rectangles" shiftY={percentage} shiftStrenghtY={10} size={200} top="55%" left="8%" />
      <AnimationSvg svg="rectangles" shiftY={percentage} shiftStrenghtY={20} size={70} top="75%" left="8%" />
      <AnimationSvg svg="rectangles" shiftY={percentage} shiftStrenghtY={10} size={100} top="20%" left="57%"/>
      <AnimationSvg svg="rectangles" shiftY={percentage} shiftStrenghtY={30} size={50} top="20%" left="60%" />
    </>
  );
};
