import React from "react";
import styled from "styled-components";
import { device } from "../../theme/breakpoints";
import SpaceWrapper from "../../utils/SpaceWrapper";

export default function Titel({ text, color, spacing, center, className }) {
  return (
    <SpaceWrapper center={center} spacing={spacing} className={className}>
      <Wrapper theme={color}>{text}</Wrapper>
    </SpaceWrapper>
  );
}

const Wrapper = styled.div`
  font-size: var(--fs-1);
  font-weight: var(--semibold);
  color: ${(props) =>
    props.theme === "purple" ? "var(--primary);" : "var(--secondary);"};
  display: inline-block;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 30%;
    bottom: 0;
    left: 0;
    height: 4px;
    border-radius: 10px;
    background-color: ${(props) =>
      props.theme === "purple" ? "var(--primary);" : "var(--secondary);"};
    transition: width 0.25s ease-out;
  }

  &:hover:after {
    transition: width 0.25s ease-out;
    width: 100%;
  }

  @media ${device.mobile} {
    &:after {
      display: none;
    }

    &:hover:after {
      display: none;
    }
  }
`;
