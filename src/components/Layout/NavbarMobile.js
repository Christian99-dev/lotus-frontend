import React, { useEffect } from "react";
import styled from "styled-components";
import { navigationLinks } from "../../utils/constants";
import Icon from "../Global/Icon";
import NavButton from "../Global/NavButton";
import SpaceWrapper from "../../utils/SpaceWrapper";
import { useState } from "react";
import { createImgUrl } from "../../utils/utils";
import { validEmail, validGermanPhoneNumber } from "../../utils/regex";

const NavbarMobile = ({
  fetchData,
  fetchNavigationData,
  fetchUnternehmenData,
}) => {
  const [toggle, setToggle] = useState(false);
  const ToggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Nav toggleNav={ToggleNav} />
      <Overlay
        open={toggle}
        toggleNav={ToggleNav}
        fetchData={fetchData}
        fetchNavigationData={fetchNavigationData}
        fetchUnternehmenData={fetchUnternehmenData}
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
  z-index: 99;
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
const Overlay = ({
  open,
  toggleNav,
  fetchData,
  fetchNavigationData,
  fetchUnternehmenData,
}) => {
  const [data, setData] = useState(null);
  const [logo, setLogo] = useState(null);
  const [navigationNames, setNavigationNames] = useState(null);
  const [unternehmenData, setUnternehmenData] = useState(null);

  useEffect(() => {
    fetchUnternehmenData().then((res) => {
      setUnternehmenData(res.data.attributes);
    });

    fetchData().then((res) => {
      setData(res.data.attributes);
      setLogo(
        createImgUrl(res.data.attributes.logo_textless.data.attributes.url)
      );
    });
    fetchNavigationData().then((res) => {
      setNavigationNames(res.data.attributes);
    });
  }, [fetchData, fetchNavigationData, fetchUnternehmenData]);

  const { rechts } = data ? data : { rechts: [] };

  return (
    <OverlayWrapper className={open ? "open" : "closed"}>
      {logo && <img src={logo} alt="logo" className="logo" />}
      <Icon
        name="close"
        height="icon-m"
        className="closeButton"
        onClick={() => toggleNav()}
      />

      <div className="scroll-wrapper">
        <div className="nav">
          {navigationNames &&
            navigationLinks.map((navigation, key) => (
              <div className="navbutton-wrapper" key={key}>
                <NavButton
                  to={navigation.toMobile ? navigation.toMobile : navigation.to}
                  text={Object.values(navigationNames)[key]}
                  className="navbutton"
                  onClick={() => {
                    toggleNav();
                  }}
                />
              </div>
            ))}
        </div>
        <div className="info">
          {unternehmenData &&
            rechts.map((data, key) => {
              return (
                <Info
                  key={key}
                  text={data.text.info}
                  iconHeight="icon-s"
                  iconName={data.icon.icon}
                  link={unternehmenData.whatsappLink}
                />
              );
            })}
        </div>
      </div>
    </OverlayWrapper>
  );
};

const OverlayWrapper = styled(SpaceWrapper)`
  z-index: 99999;
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
    z-index: -1;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--navmobile-overlay-logo-height);
  }

  .closeButton {
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

const Info = ({ text, iconColor, iconName, iconHeight, link }) => (
  <InfoWrapper>
    <Icon
      height={iconHeight}
      name={iconName}
      color={iconColor}
      link={
        (iconName === "whatsapp" && link) ||
        (iconName === "mail" && validEmail.test(text) && `mailto:${text}`)
      }
    />
    {!validGermanPhoneNumber.test(text) && !validEmail.test(text) ? (
      <div>{text}</div>
    ) : validGermanPhoneNumber.test(text) ? (
      <a href={`tel:${text}`}>{text}</a>
    ) : (
      <a href={`mailto:${text}`}>{text}</a>
    )}
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

  a {
    color: var(--secondary);
    text-decoration: none;
  }
`;
