import React from "react";
import styled from "styled-components";
import NavButton from "../Global/NavButton";
import SpaceWrapper from "../../utils/SpaceWrapper";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useGlobalState } from "../../utils/globalState";
import { navigationLinks } from "../../utils/constants";
import { useRef } from "react";
import { useEffect } from "react";
import { device } from "../../theme/breakpoints";
import { WhatsappTooltip } from "../Global/WhatsappTooltip";
import IconAndText from "../Global/IconAndText";
import useGlobalData from "../../utils/useGlobalData";

export default function Navbar({ strapiWillkommen, strapiHeader }) {
  return (
    <>
      <Top strapiHeader={strapiHeader} />
      <Bar />
      <Bottom strapiWillkommen={strapiWillkommen} />
    </>
  );
}

export const Top = ({ strapiHeader }) => {
  const { links, rechts } = strapiHeader;
  const globalData = useGlobalData().parse;
  return (
    <TopWrapper spacing={{ left: "border", right: "border" }} id="topbar">
      <WhatsappTooltip />
      <div className="container">
        <div className="left">{globalData(links.globalID)}</div>

        <div className="right">
          {rechts.map((data, key) => (
            <IconAndText
              key={key}
              text={globalData(data.global.globalID)}
              iconHeight="icon-s"
              iconName={data.icon.iconID}
              className="info"
              textsize="fs-4"
              direction="row"
              gap=""
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

      .right {
        text-align: center;
        justify-content: center;
      }

      .loader {
        margin: 0 auto;
      }
    }

    @media ${device.tablet} {
      .right {
        flex-direction: column;
        align-items: center;
        gap: calc(var(--topbar-gap-right) / 2);
      }
      gap: calc(var(--topbar-inner-gap) * 2);
      padding: var(--topbar-mobile-tb-border);
    }
  }
`;

const Bar = () => {
  const ref = useRef();
  const dispatch = useGlobalState()[1];

  /** Intersection Observer */
  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => dispatch({ type: "SET_NAVBAR", value: e.intersectionRatio < 1 }),
      { threshold: [1] }
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref, dispatch]);

  return (
    <BarWrapper ref={ref}>
      <SpaceWrapper
        spacing={{ top: "navbar-inner", bottom: "navbar-inner" }}
        className="navbuttons"
      >
        {navigationLinks.map((navigation, key) => (
          <NavButton key={key} to={navigation.to} text={navigation.name} />
        ))}
      </SpaceWrapper>
    </BarWrapper>
  );
};

const BarWrapper = styled.nav`
  position: sticky;
  top: -1px;
  z-index: 100;
  .navbuttons {
    background-color: var(--secondary);
    display: flex;
    gap: var(--navbar-gap);
    justify-content: center;
  }
`;

const Bottom = ({ strapiWillkommen }) => {
  const { hintergrund } = strapiWillkommen;
  const { logo } = useGlobalData().data;

  return (
    <BottomWrapper className={useGlobalState()[0].navbarStuck ? "stuck" : ""}>
      <GatsbyImage
        image={getImage(hintergrund.localFile)}
        alt={hintergrund.alternativeText}
        className="hintergrund"
      />

      <SpaceWrapper spacing={{ top: "navbar-inner" }} className="filter">
        <GatsbyImage
          image={getImage(logo.localFile)}
          alt={logo.alternativeText}
          className="logo"
        />
      </SpaceWrapper>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  .hintergrund {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -100;
  }

  .filter {
    background-color: var(--background-filter-dark);
    transition: background-color 0.5s ease;
  }

  .logo {
    width: 100%;
    img {
      margin: 0 auto;
      width: auto;
      height: var(--navbar-logo-height);
      overflow-anchor: revert-layer;
      display: block;
      transition: opacity 0.5s ease;
      opacity: 1;
    }
  }

  &.stuck {
    .filter {
      transition: background-color 0.5s ease;
      background-color: var(--background-filter-dark);
      .logo {
        img {
          transition: opacity 0.5s ease;
          opacity: 0 !important;
        }
      }
    }
  }
`;
