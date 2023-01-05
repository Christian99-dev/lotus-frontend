import React from "react";
import styled from "styled-components";
import img1 from "./../media/images/person1.png";
import img2 from "./../media/images/person2.png";
import Titel from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import TextWithBackground from "../components/Global/TextWithBackground";
import Rectangles from "./Effects/Rectangles";
import { Parallax } from "react-parallax";
import { device, size } from "../theme/breakpoints";
import useWindowDimensions from "../utils/useWindowDimensions";
import { useEffect } from "react";
import { useRef } from "react";
import MySwiper from "../components/Global/MySwiper";

export default function Team({ ...props }) {
  const personsMobile = [
    <PersonMobile
      img={img1}
      text="aoifusb azubaus daius bdaiuasdjk asd naois dnaoisd naosid naosid nasodi naosdi nasodi nasod in naosid nasonaosid nasodi naosdi nasodi nasod indi naosdi nasodi nasod in"
      jobTitle="Klempner"
      name="Max Mustermann"
    />,
    <PersonMobile
      img={img2}
      text="aoifusb azubaus daius bdaiuasdjk asd naois dnaoisd naosid naosid nasodi naosdi nasodi nasod in naosid nasonaosid nasodi naosdi nasodi nasod indi naosdi nasodi nasod in"
      jobTitle="Klempner"
      name="Max Mustermann"
    />,
  ];
  return (
    <div id="team">
      <TeamWrapper
        spacing={{
          top: "white-component-inner-half",
          bottom: "white-component-inner",
        }}
        {...props}
      >
        <Rectangles />
        <Titel
          center
          text="Das Team"
          spacing={{
            bottom: "white-component-inner-half",
            left: "border",
            right: "border",
          }}
          color="purple"
        />

        {useWindowDimensions().width > size.tablet ? (
          <SpaceWrapper
            className="container-desktop"
            spacing={{ left: "border", right: "border" }}
          >
            <Person
              img={img1}
              text="aoifusb azubaus daius bdaiuasdjk asd naois dnaoisd naosid naosid nasodi naosdi nasodi nasod in naosid nasonaosid nasodi naosdi nasodi nasod indi naosdi nasodi nasod in"
              jobTitle="Klempner"
              name="Max Mustermann"
            />
            <Person
              img={img2}
              text="aoifusb azubaus daius bdaiuasdjk asd naois dnaoisd naosid naosid nasodi naosdi nasodi nasod in naosid nasodi naosdi nasodi nasod in wrwes"
              jobTitle="Klempner"
              name="Max Mustermann"
              right
            />
          </SpaceWrapper>
        ) : (
          <MySwiper array={personsMobile} cards />
        )}
      </TeamWrapper>
    </div>
  );
}

const TeamWrapper = styled(SpaceWrapper)`
  position: relative;
  .container-desktop {
    display: flex;
    justify-content: space-between;
    gap: var(--team-gap);
    @media ${device.laptop} {
      flex-direction: column;
      gap: var(--team-gap);
    }
  }
`;

function Person({ img, text, name, jobTitle, right, ...props }) {
  let strength = right ? 125 : -125;
  return (
    <PersonWrapper img={img} right={right} {...props}>
      <Parallax className="img" strength={strength} bgImage={img} />
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1 1 0;

  @media ${device.laptop} {
    grid-template-columns: ${(props) => (props.right ? "45% 55%" : "55% 45%")};
  }

  .img {
    flex: 1 1 0;
    > div {
      min-width: 250px;
      height: 500px;
    }
  }

  .info-box {
    order: ${(props) => (props.right ? "-1" : "1")};
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

    @media ${device.laptop} {
      justify-content: flex-start;
      padding: ${(props) =>
        props.right ? " 50px  50px 0 0" : "50px 0 0 50px"};
    }
  }
`;

const PersonMobile = ({ img, text, jobTitle, name }) => {
  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({ startY: 0, lastY: 300 });

  useEffect(() => {
    if (!overlayRef.current || !containerRef.current) return;

    const overlay = overlayRef.current;
    const container = containerRef.current;

    const onMouseDown = (e) => {
      isClicked.current = true;
      document.body.style.overflow = "hidden";
      coords.current.startY = e.clientY ? e.clientY : e.touches[0].clientY;
    };

    const onMouseUp = (e) => {
      isClicked.current = false;
      document.body.style.overflow = "unset";
      coords.current.lastY = overlay.offsetTop;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const y =
        e.touches[0].clientY - coords.current.startY + coords.current.lastY;

      if (y <= 0) {
        overlay.style.top = `0`;
      } else if (y > 300) {
        overlay.style.top = `300px`;
      } else {
        overlay.style.top = `${y}px`;
      }
    };

    overlay.addEventListener("touchstart", onMouseDown);
    overlay.addEventListener("touchend", onMouseUp);
    container.addEventListener("touchmove", onMouseMove);

    const cleanUp = () => {
      overlay.removeEventListener("touchstart", onMouseDown);
      overlay.removeEventListener("touchend", onMouseUp);
      container.removeEventListener("touchmove", onMouseMove);
    };

    return cleanUp;
  }, []);

  return (
    <PersonWrapperMobile ref={containerRef}>
      <img className="img" src={img} />
      <div ref={overlayRef} className="overlay">
        <div className="handle" />
        <TextWithBackground text={name} fontSize="2" className="name" />
        <TextWithBackground
          spacing={{ bottom: 10 }}
          text={jobTitle}
          fontSize="3"
        />
        <div className="text">{text}</div>
      </div>
    </PersonWrapperMobile>
  );
};

const PersonWrapperMobile = styled.div`
  height: var(--team-mobile-height);
  position: relative;
  overflow: hidden;
  width: var(--team-person-max-width-tablet);
  margin: 0 var(--border);

  .img {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 300px;
    border-radius: 20px 20px 0 0;
    padding: var(--team-mobile-inner-padding);
    background-color: white;
    text-align: center;
    box-sizing: border-box;

    .text {
      font-size: var(--fs-4);
      color: var(--primary);
      font-weight: var(--medium);
    }

    .handle {
      height: 5px;
      background-color: var(--primary);
      width: var(--team-mobile-handle-width);
      border-radius: 25px;
      margin: 0 auto;
      margin-bottom: 10px;
    }
  }
`;
