import React from "react";
import { LineLoader } from "react-loaders-kit";
import styled from "styled-components";
import { device } from "../../theme/breakpoints";

const Loader = ({ spinner, color, height, iconAsHeight }) => {
  const loaderProps = {
    loading: true,
    size: 400,
    duration: 1,
    colors: ["red", "red"],
  };

  if (spinner) return <LineLoader {...loaderProps} />;

  return (
    <TextLoader
      className={`loader ${iconAsHeight ? "iconAsHeight" : ""}`}
      height={height}
      color={color}
    />
  );
};

export default Loader;

const TextLoader = styled.div`
  height: calc(var(--${(props) => props.height}) + 9px);
  background-color: var(--${(props) => props.color});
  width: var(--loader-width);
  border-radius: 20px;
  opacity: 0.5;
  display: inline-block;

  @media ${device.laptop} {
    height: calc(var(--${(props) => props.height}) + 7px);
  }

  &.iconAsHeight {
    height: calc(var(--${(props) => props.height}));
  }
`;
