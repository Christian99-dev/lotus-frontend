import React from "react";
import styled from "styled-components";
import { info, navigationLinks } from "../../constants";
import Icon from "../Global/Icon";
import NavButton from "../Global/NavButton";
import LogoTransparent from "../../media/logo/logo-transparent.svg";
import SpaceWrapper from "../../utils/SpaceWrapper";
import { useState } from "react";

const NavbarMobile = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Nav toggleNav={ToggleNav} />
      <Overlay open={toggle} toggleNav={ToggleNav} />
    </>
  );
};

export default NavbarMobile;

// Navbar
const Nav = ({ toggleNav }) => (
  <NavWrapper>
    <Icon name="menu" onClick={() => toggleNav()} />
    <div className="text">Home</div>
  </NavWrapper>
);

const NavWrapper = styled.div`
  position: sticky;
  z-index: 999999;
  top: 0;
  background-color: var(--primary);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: var(--navmobile-bar-padding);
  img {
    margin: auto 0;
    height: var(--navmobile-bar-icon-height);
  }

  .text {
    text-align: center;
    font-size: var(--fs-2);
    color: var(--secondary);
    font-weight: var(--semibold);
  }
`;

// overlay
const Overlay = ({ open, toggleNav }) => {
  return (
    <OverlayWrapper className={open ? "open" : "closed"}>
      <div className="logo-wrapper">
        <img src={LogoTransparent} alt="logo" className="logo" />
      </div>
      <Icon
        name="close"
        height="icon-l"
        className="closeButton"
        onClick={() => toggleNav()}
      />
      <div className="nav">
        {navigationLinks.map((navigation, key) => (
          <div className="navbutton-wrapper" key={key}>
            <NavButton
              to={navigation.toMobile ? navigation.toMobile : navigation.to}
              text={navigation.name}
              className="navbutton"
              onClick={() => {toggleNav()}}
            />
          </div>
        ))}
      </div>
      <div className="info">
        {info.map((info, key) => (
          <Info
            key={key}
            text={info.text}
            iconHeight="icon-s"
            iconName={info.icon}
          />
        ))}
      </div>
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled(SpaceWrapper)`
  z-index: 999999;
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100vh;
  padding: var(--navmobile-overlay-inner);
  text-align: center;
  background-color: var(--primary);
  transform: translateX(-100%);
  transition: transform 0.5s ease;

  &.open {
    transform: translateX(0);
    transition: transform 0.5s ease;
  }

  .logo {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    height: var(--navmobile-overlay-logo-height);
  }

  .closeButton {
    display: flex;
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: var(--navmobile-overlay-gap-links);
    margin-bottom: var(--navmobile-overlay-gap-big);
    .navbutton-wrapper {
      .navbutton {
        color: var(--secondary);
        font-size: var(--fs-2);
        &:after {
          background-color: var(--secondary);
        }
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: var(--navmobile-overlay-gap-info);
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
  font-size: var(--fs-3);
  font-weight: var(--medium);
  color: var(--secondary);
  display: flex;
  flex-direction: column;
  gap: var(--navmobile-overlay-gap-info-inner);
  align-items: center;
`;
