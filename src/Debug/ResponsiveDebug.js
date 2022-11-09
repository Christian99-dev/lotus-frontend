import React from "react";
import styled from "styled-components";
import { device } from "../theme/breakpoints";

export default function ResponsiveDebug () {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  color: white;
  font-weight: 600;
  font-size: 40px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  
  @media ${device.desktopPlus} {
    background-color: salmon;
    &::after {
      content: "desktopPlus";
    }
  }

  /** ^  */

  /** v  */
  /* @media ${device.desktop} {
    background-color: red;
    &::after {
      content: "desktop";
    }
  } */
  
  @media ${device.laptop} {
    color: black;
    background-color: yellow;
    color: green;
    &::after {
      content: "laptop";
    }
  }

  @media ${device.tablet} {
    &::after {
      content: "tablet";
    }
  }

  @media ${device.mobile} {
    background-color: blue;
    &::after {
      content: "mobile";
    }
  }
`;
