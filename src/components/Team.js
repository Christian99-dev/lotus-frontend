import React, { useState } from "react";
import styled from "styled-components";
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
import Loader from "./Global/Loader";
import { createImgUrl, Parser } from "../utils/utils";

export default function Team({ fetchData }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
    });
  }, [fetchData]);
  return (
    <div id="team">
      <TeamWrapper
        spacing={{
          top: "white-component-inner-half",
          bottom: "white-component-inner",
        }}
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
          data ? (
            <SpaceWrapper
              className="container-desktop"
              spacing={{ left: "border", right: "border" }}
            >
              {data.mitarbeiter.map((member, key) => {
                return <Person
                  key={key}
                  img={createImgUrl(member.bild.data.attributes.url)}
                  text={member.beschreibung}
                  name={member.vorname + " " + member.nachname}
                  jobTitle={member.berufsbezeichnung}
                  right={key === 1}
                />;
              })}
            </SpaceWrapper>
          ) : (
            <Loader dots />
          )
        ) : data ? (
          <MySwiper
            array={data.mitarbeiter.map((member, key) => {
              return <PersonMobile
                key={key}
                img={createImgUrl(member.bildMobile.data.attributes.url)}
                text={member.beschreibung}
                name={member.vorname + " " + member.nachname}
                jobTitle={member.berufsbezeichnung}
              />;
            })}
            cards
          />
        ) : (
          <Loader dots />
        )}
      </TeamWrapper>
    </div>
  );
}

const TeamWrapper = styled(SpaceWrapper)`
  background-color: white;
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
        <div className="text">{Parser(text)}</div>
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
      <img className="img" src={img} alt="img" />
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
