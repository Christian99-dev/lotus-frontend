import React from "react";
import styled from "styled-components";
import NavButton from "../Global/NavButton";
import LogoText from "../../media/logo/logo-text.svg";
import SpaceWrapper from "../../utils/SpaceWrapper";
import Icon from "../Global/Icon";

export default function Navbar() {
  return (
    <>
      <Top />
      <Bottom />
    </>
  );
}

// Top
const Top = () => (
  <TopWrapper spacing={{ left: "border", right: "border" }}>
    <div className="container">
      <div className="left">Lotus-Entwässerungstechnik</div>
      <div className="right">
        <Info
          text="max.mustermann@gmail.de"
          iconHeight="20px"
          iconName="mail"
        />
        <Info text="01567 / 482375" iconHeight="20px" iconName="phone" />
        <Info text="Täglich von 8 - 22 Uhr" iconHeight="20px" iconName="time" />
      </div>
    </div>
  </TopWrapper>
);

const TopWrapper = styled(SpaceWrapper)`
  display: flex;
  height: var(--topbar-height);;
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
      gap: 50px;
    }
  }
`;

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

// Bottom

const Bottom = () => {
  return (
    <BottomWrapper>
      <SpaceWrapper spacing={{ top: "navbar-inner", bottom: "navbar-inner" }} className="links">
        <NavButton text="Home" className="active" />
        <NavButton text="Leistungen" />
        <NavButton text="Arbeit" />
        <NavButton text="Das Team" />
        <NavButton text="Kontakt" />
        <NavButton text="Rezensionen" />
        <NavButton text="Impressum" />
      </SpaceWrapper>
      <SpaceWrapper spacing={{ bottom: "navbar-inner" }} className="logo-container">
        <img src={LogoText} alt="logo-text" />
      </SpaceWrapper>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  background-color: var(--secondary);

  .links {
    display: flex;
    gap: 50px;
    justify-content: center;
  }

  .logo-container {
    img {
      margin: 0 auto;
      display: block;
    }
  }
`;
