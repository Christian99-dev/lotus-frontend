import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Titel from "./Global/Titel";
import bgImg from "./../media/images/img2.png";
import { Parallax } from "react-parallax";
import logo_transparent from "../media/illu/logo_transparent.svg";
import { device } from "../theme/breakpoints";

export default function Panel({ ...props }) {
  return (
    <div id="panel">
      <PannelWrapper bgImage={bgImg} strength={200} {...props}>
        <SpaceWrapper className="box">
          <Titel
            text="Unsere Arbeit"
            spacing={{ bottom: 50 }}
          />
          <div className="text" id="panel">
            <img className="logo" src={logo_transparent} alt="logo" />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea
          </div>
        </SpaceWrapper>
        <div className="img" />
      </PannelWrapper>
    </div>
  );
}

const PannelWrapper = styled(Parallax)`
  .box {
    width: 50%;
    box-sizing: border-box;
    padding: var(--pannel-inner) var(--border);
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    background-color: var(--primary);
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

  @media ${device.laptop} {
    .box {
      width: 65%;
    }
  }

  @media ${device.tablet} {
    .react-parallax-bgimage {
      height: var(--pannel-height-mobile) !important;
    }
    height: var(--pannel-height-mobile);
    .box {
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
      width: 100%;
      .text {
        .logo {
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
          top: 10%;
          left: 0;
          right: 0;
          bottom: 0;
        }
        text-align: center;
      }
      .logo {
        left: 50%;
      }
    }
  }
`;
