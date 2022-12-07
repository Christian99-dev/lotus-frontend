import React from "react";
import styled from "styled-components";
import NavButton from "../Global/NavButton";
import LogoText from "../../media/logo/logo-text.svg";
import SpaceWrapper from "../../utils/SpaceWrapper";
import Icon from "../Global/Icon";
import { useGlobalState } from "../../utils/globalState";
import { info, navigationLinks } from "../../constants";

export default function Navbar() {
  return (
    <>
      <Top />
      <Bottom />
    </>
  );
}

// Top
const Top = () => {
  return (
    <TopWrapper spacing={{ left: "border", right: "border" }} id="topbar">
      <div className="container">
        <div className="left">Lotus-Entwässerungstechnik</div>
        <div className="right">
          {info.map((info, key) => (
            <Info
              key={key}
              text={info.text}
              iconHeight="icon-s"
              iconName={info.icon}
            />
          ))}
        </div>
      </div>
    </TopWrapper>
  );
};

const TopWrapper = styled(SpaceWrapper)`
  display: flex;
  flex-wrap: wrap;
  height: var(--topbar-height);
  background-color: var(--primary);
  flex-direction: column;
  justify-content: space-around;

  .container {
    display: flex;
    justify-content: space-between;
    .left {
      color: var(--secondary);
      font-size: var(--fs-3);
      font-weight: var(--semibold);
    }

    .right {
      display: flex;
      gap: var(--topbar-gap-right);
    }
  }
`;

// Bottom
const Bottom = () => {
  const state = useGlobalState()[0];
  const classes = state.passedCarousel ? "stuck" : "";

  return (
    <>
      <BottomWrapper className={classes}>
        <SpaceWrapper
          spacing={{ top: "navbar-inner", bottom: "navbar-inner" }}
          className="links"
        >
          {navigationLinks.map((navigation, key) => (
            <NavButton key={key} to={navigation.to} text={navigation.name} />
          ))}
        </SpaceWrapper>
        <SpaceWrapper
          spacing={{ bottom: "navbar-inner" }}
          className="logo-container"
        >
          <img src={LogoText} alt="logo-text" />
        </SpaceWrapper>
      </BottomWrapper>
    </>
  );
};

const BottomWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 999999;

  .links {
    background-color: var(--secondary);
    display: flex;
    gap: var(--navbar-gap);
    justify-content: center;
  }

  .logo-container {
    background-color: var(--secondary);
    img {
      overflow-anchor: revert-layer;
      transition: height 0.5s ease-out;
      height: var(--navbar-logo-height);
      margin: 0 auto;
      display: block;
    }
  }

  &.stuck {
    .logo-container {
      img {
        transition: height 0.5s ease-in;
        height: 0px;
      }
    }
  }
`;

// info
const Info = ({ text, iconColor, iconName, iconHeight }) => (
  <InfoWrapper>
    <Icon height={iconHeight} name={iconName} color={iconColor} />
    <div>{text}</div>
  </InfoWrapper>
);

const InfoWrapper = styled.div`
  font-size: var(--fs-4);
  font-weight: var(--medium);
  color: var(--secondary);
  display: flex;
  gap: 10px;
  align-items: center;
`;
