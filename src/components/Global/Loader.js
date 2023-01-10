import React from "react";
import { LineLoader } from "react-loaders-kit";
import styled from "styled-components";
import { device } from "../../theme/breakpoints";
import SpaceWrapper from "../../utils/SpaceWrapper";

const Loader = ({ spinner, color, height, iconAsHeight, spacing, margin }) => {
  const loaderProps = {
    loading: true,
    size: 400,
    duration: 1,
    colors: ["red", "red"],
  };

  if (spinner) return <LineLoader {...loaderProps} />;

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
