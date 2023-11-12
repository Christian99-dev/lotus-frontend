import React from "react";
import styled from "styled-components";
import { navigationLinks } from "../../utils/constants";
import Icon from "../Global/Icon";
import NavButton from "../Global/NavButton";
import SpaceWrapper from "../../utils/SpaceWrapper";
import { useState } from "react";
import IconAndText from "../Global/IconAndText";
import useGlobalData from "../../utils/useGlobalData";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const NavbarMobile = ({ strapiHeader }) => {
  const [toggle, setToggle] = useState(false);
  const ToggleNav = () => {
    console.log("toggle")
    setToggle(!toggle);
  };

  return (
    <>
      <Nav toggleNav={ToggleNav} />
      <Overlay
        open={toggle}
        toggleNav={ToggleNav}
        strapiHeader={strapiHeader}
      />
    </>
  );
};

export default NavbarMobile;

// Navbar
const Nav = ({ toggleNav }) => {
  return (
    <NavWrapper id="topbarMobile">
      <Icon name="menu" onClick={() => toggleNav()} />
      <div className="text">Home</div>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
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
const Overlay = ({ open, toggleNav, strapiHeader }) => {
  const { rechts } = strapiHeader;
  const {
    parse,
    data: { logoOhneText },
  } = useGlobalData();

  document.body.style.overflow = open ? "hidden" : "unset";

  return (
    <OverlayWrapper className={open ? "open" : "closed"}>
      <GatsbyImage
        className="logo"
        image={getImage(logoOhneText.localFile)}
        alt={logoOhneText.alternativeText}
      />
      <Icon
        name="close"
        height="icon-m"
        className="closeButton"
        onClick={() => toggleNav()}
      />

      <div className="scroll-wrapper">
        <div className="nav">
          {navigationLinks.map((navigation, key) => (
            <div className="navbutton-wrapper" key={key}>
              <NavButton
                to={navigation.toMobile ? navigation.toMobile : navigation.to}
                text={navigation.name}
                className="navbutton"
                onClick={() => {
                  toggleNav();
                }}
              />
            </div>
          ))}
        </div>
        <div className="info">
          {rechts.map((data, key) => {
            return (
              <IconAndText
                key={key + 100}
                text={parse(data.global.globalID)}
                iconHeight="icon-s"
                iconName={data.icon.iconID}
                gap="navmobile-overlay-gap-info-inner"
              />
            );
          })}
        </div>
      </div>
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled(SpaceWrapper)`
  z-index: 300;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background-color: var(--primary);
  transform: translateX(-100%);
  transition: transform 0.5s ease;

  &.open {
    transform: translateX(0);
    transition: transform 0.5s ease;
  }

  .logo {
    z-index: 300;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      margin: auto;
      text-align: center;
      width: auto;
      height: var(--navmobile-overlay-logo-height);
    }
  }

  .closeButton {
    z-index: 301;
    position: absolute;
    top: var(--navmobile-overlay-inner);
    left: var(--navmobile-overlay-inner);
  }

  .scroll-wrapper {
    overscroll-behavior: contain;
    overflow: scroll;
    margin: calc(var(--navmobile-overlay-inner) + var(--icon-m)) 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

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
  }
`;
