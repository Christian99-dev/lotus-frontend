import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Titel from "./Global/Titel";
import bgImg from "./../media/images/img2.png";

export default function Panel() {
  return (
    <PannelWrapper bgImg={bgImg}>
      <SpaceWrapper spacing={{ top: 150, bottom: 150 }} className="box">
        <Titel text="Unsere Arbeit" spacing={{ bottom: 50 }} />
        <div className="text">
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
        <div className="img"/>
    </PannelWrapper>
  );
}

const PannelWrapper = styled.div`
display: flex;
  .box {
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    padding-left: var(--border) !important;
    padding-right: var(--border) !important;
    background-color: var(--primary);
    width: 25%;
    .text {
      color: var(--secondary);
      font-size: var(--fs-4);
      font-weight: var(--medium);
    }
  }
  .img {
    margin-left: -300px;
    width: 75%;
    background: center / cover no-repeat url(${(props) => props.bgImg});
  }
`;
