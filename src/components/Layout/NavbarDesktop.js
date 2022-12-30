import React from "react";
import styled from "styled-components";
import NavButton from "../Global/NavButton";
import LogoText from "../../media/logo/logo-text.svg";
import SpaceWrapper from "../../utils/SpaceWrapper";
import Icon from "../Global/Icon";
import { useGlobalState } from "../../utils/globalState";
import { info, navigationLinks } from "../../constants";
import bgimg from "../../media/images/img1.png";
import { useRef } from "react";
import { useEffect } from "react";
import { device } from "../../theme/breakpoints";

export default function Navbar() {
  return (
    <>
      <Top />
      <Bar />
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
              className="info"
            />
          ))}
        </div>
      </div>
    </TopWrapper>
  );
};

const TopWrapper = styled(SpaceWrapper)`
  display: flex;
  background-color: var(--primary);
  flex-direction: column;
  justify-content: space-around;
  
  .container {
    padding: var(--topbar-inner-padding);
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

    @media ${device.laptop} {
      flex-direction: column;
      text-align: center;
      gap: var(--topbar-inner-gap);
      .right{
        text-align: center;
        justify-content: center;
      }
    }

   
  }
`;

// Bar
const Bar = () => {
  const ref = useRef();
  const dispatch = useGlobalState()[1];

  /** Intersection Observer */
  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => dispatch({ navbarStuck: e.intersectionRatio < 1 }),
      { threshold: [1] }
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref, dispatch]);

  return (
    <BarWrapper ref={ref}>
      <SpaceWrapper
        spacing={{ top: "navbar-inner", bottom: "navbar-inner" }}
        className="links"
      >
        {navigationLinks.map((navigation, key) => (
          <NavButton key={key} to={navigation.to} text={navigation.name} />
        ))}
      </SpaceWrapper>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  position: sticky;
  top: -1px;
  z-index: 999999;
  .links {
    background-color: var(--secondary);
    display: flex;
    gap: var(--navbar-gap);
    justify-content: center;
  }
`;

// Bottom
const Bottom = () => {
  return (
    <BottomWrapper className={useGlobalState()[0].navbarStuck ? "stuck" : ""}>
      <div className="logo-container">
        <SpaceWrapper spacing={{ bottom: "navbar-inner" }} className="filter">
          <img src={LogoText} alt="logo-text" />
        </SpaceWrapper>
      </div>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  .logo-container {
    background-image: url(${bgimg});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    .filter {
      background-color: var(--secondary);
      transition: background-color 0.5s ease;
    }

    img {
      overflow-anchor: revert-layer;
      transition: height 0.5s ease-out;
      height: var(--navbar-logo-height);
      margin: 0 auto;
      display: block;
      transition: opacity 0.5s ease;
      opacity: 1;
    }
  }

  &.stuck {
    .filter {
      transition: background-color 0.5s ease;
      background-color: var(--background-filter-dark);
      img {
        transition: opacity 0.5s ease;
        opacity: 0;
      }
    }
  }
`;

// info
const Info = ({ text, iconColor, iconName, iconHeight }) => (
  <InfoWrapper>
    <Icon height={iconHeight} name={iconName} color={iconColor} />
    <div className="text">{text}</div>
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
