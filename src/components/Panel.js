import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Titel from "./Global/Titel";
import bgImg from "./../media/images/img2.png";
import { Parallax } from "react-parallax";
import logo_transparent from "../media/illu/logo_transparent.svg";

export default function Panel() {
  return (
    <PannelWrapper bgImage={bgImg} strength={200}>
      <SpaceWrapper
        spacing={{ top: 150, bottom: 150, left: "border", right: "border" }}
        className="box"
      >
        <Titel text="Unsere Arbeit" spacing={{ bottom: 50 }} />
        <div className="text">
          <img className="logo" src={logo_transparent} alt="logo" />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        </div>
      </SpaceWrapper>
      <div className="img" />
    </PannelWrapper>
  );
}

const PannelWrapper = styled(Parallax)`
  display: flex;
  
  .box {
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    background-color: var(--primary);
    width: 25%;
    position: relative;
    .text {
      .logo {
        top: 10%;
        left: 10%;
        position: absolute;
      }
      color: var(--secondary);
      font-size: var(--fs-4);
      font-weight: var(--medium);
    }
  }

  .img {
    margin-left: -300px;
    width: 75%;
    background: center / cover no-repeat fixed url(${(props) => props.bgImg});
  }
`;
