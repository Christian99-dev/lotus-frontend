import React from "react";
import { LineLoader, SpinningCircleLoader } from "react-loaders-kit";
import styled from "styled-components";
import { device } from "../../theme/breakpoints";
import SpaceWrapper from "../../utils/SpaceWrapper";

const Loader = ({ spinner, color, height, iconAsHeight, spacing, margin }) => {

  if (spinner)
    return (
      <NormalLoader height={height}>
        <SpinningCircleLoader loading={true} className="loader" />
      </NormalLoader>
    );

  return (
    <SpaceWrapper margin={margin} spacing={spacing}>
      <TextLoader
        className={`loader ${iconAsHeight ? "iconAsHeight" : ""}`}
        height={height}
        color={color}
      />
    </SpaceWrapper>
  );
};

export default Loader;

const NormalLoader = styled.div`
  > div {
    display: inline;
    > div {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.1) 33%,
        var(--primary) 100%
      );
      margin: auto;
      > div {
        background: var(--secondary);
      }
    }
    z-index: 99;
    height: calc(var(--${(props) => props.height}) - 5px);
    width: calc(var(--${(props) => props.height}) - 5px);
  }
`;

const TextLoader = styled.div`
  background-color: var(--${(props) => props.color});
  width: var(--loader-width);
  border-radius: 20px;
  opacity: 0.5;

  height: calc(var(--${(props) => props.height}) + 9px);

  @media ${device.laptop} {
    height: calc(var(--${(props) => props.height}) + 7px);
  }

  &.iconAsHeight {
    height: calc(var(--${(props) => props.height}));
  }
`;
