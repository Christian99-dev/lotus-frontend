import React from "react";
import { SpinningCircleLoader, DotsLoader } from "react-loaders-kit";
import styled from "styled-components";
import { device } from "../../theme/breakpoints";
import SpaceWrapper from "../../utils/SpaceWrapper";

const Loader = ({
  title,
  spinner,
  color,
  height,
  iconAsHeight,
  spacing,
  margin,
  dots,
  className
}) => {
  if (dots) {
    return (
      <DotsLoaderWrapper margin={margin} spacing={spacing} className={className}>
        <DotsLoader loading height={200} />
      </DotsLoaderWrapper>
    );
  }
  if (spinner)
    return (
      <SpaceWrapper margin={margin} spacing={spacing} className={className}>
        <NormalLoader height={height}>
          <SpinningCircleLoader loading={true} className="loader" />
        </NormalLoader>
      </SpaceWrapper>
    );

  return (
    <SpaceWrapper margin={margin} spacing={spacing} className={className}>
      <TextLoader
        className={`loader ${iconAsHeight ? "iconAsHeight" : ""} ${
          title ? "title" : ""
        }`}
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

  &.title {
    height: calc(var(--fs-1) + 18px);

    @media ${device.desktopPlus} {
      height: calc(var(--fs-1) + 20px);
    }

    @media ${device.laptop} {
      height: calc(var(--fs-1) + 16px);
    }

    @media ${device.tablet} {
      margin: 0 auto;
      height: calc(var(--fs-1) + 15px);
    }
  }
`;

const DotsLoaderWrapper = styled(SpaceWrapper)`
  > div {
    margin: auto;
    > div {
      > div {
        background: var(--primary);
      }
    }
  }
`;
