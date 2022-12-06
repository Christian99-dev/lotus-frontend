import React from "react";
import styled from "styled-components";
import NavButton from "../Global/NavButton";
import LogoText from "../../media/logo/logo-text.svg";
import SpaceWrapper from "../../utils/SpaceWrapper";
import Icon from "../Global/Icon";
import { useGlobalState } from "../../utils/globalState";
import { navigationLinks } from "../../constants";

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
    <TopWrapper spacing={{ left: "border", right: "border" }}>
      <div className="container">
        <div className="left">Lotus-Entwässerungstechnik</div>
        <div className="right">
          <Info
            text="max.mustermann@gmail.de"
            iconHeight="icon-s"
            iconName="mail"
          />
          <Info text="01567 / 482375" iconHeight="icon-s" iconName="phone" />
          <Info
            text="Täglich von 8 - 22 Uhr"
            iconHeight="icon-s"
            iconName="time"
          />
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
  const classes = state.passedCards ? "stuck" : "";
  const navButtonSetting = { duration: 800, offset: -100, smooth: true };

  return (
    <>
      <BottomWrapper className={classes}>
        <SpaceWrapper
          spacing={{ top: "navbar-inner", bottom: "navbar-inner" }}
          className="links"
        >
          {navigationLinks.map((navigation, key) => (
            <NavButton
              key={key}
              {...navButtonSetting}
              to={navigation.to}
              text={navigation.name}
            />
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
    transition: margin 1s ease;
    .logo-container {
      img {
        transition: height 0.5s ease-in;
        height: 10px;
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
