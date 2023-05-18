import React from "react";
import styled from "styled-components";
import NavButton from "../Global/NavButton";
import SpaceWrapper from "../../utils/SpaceWrapper";
import Icon from "../Global/Icon";
import { useGlobalState } from "../../utils/globalState";
import { navigationLinks } from "../../utils/constants";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { device, size } from "../../theme/breakpoints";
import Loader from "../Global/Loader";
import { createImgUrl } from "../../utils/utils";
import defaultPurple from "../../media/images/purple.png";
import { validEmail, validGermanPhoneNumber } from "../../utils/regex";
import WhatsappTooltipWrapper, {
  WhatsappTooltip,
} from "../Global/WhatsappTooltip";
import IconAndText from "../Global/IconAndText";

export default function Navbar({
  fetchData,
  fetchNavigationData,
  fetchUnternehmenData,
}) {
  return (
    <>
      <Top fetchData={fetchData} fetchUnternehmenData={fetchUnternehmenData} />
      <Bar fetchData={fetchData} fetchNavigationData={fetchNavigationData} />
      <Bottom fetchData={fetchData} />
    </>
  );
}

// Top
export const Top = ({ fetchData, fetchUnternehmenData }) => {
  const [data, setData] = useState(null);
  const [unternehmenData, setUnternehmenData] = useState(null);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
    });

    fetchUnternehmenData().then((res) => {
      setUnternehmenData(res.data.attributes);
    });
  }, [fetchData]);

  return (
    <TopWrapper spacing={{ left: "border", right: "border" }} id="topbar">
      <WhatsappTooltip />
      <div className="container">
        {data ? (
          <div className="left">{data.links.info}</div>
        ) : (
          <Loader text color="secondary" height="fs-3" />
        )}
        <div className="right">
          {data && unternehmenData ? (
            data.rechts.map((data, key) => (
              <IconAndText
                key={key}
                text={data.text.info}
                iconHeight="icon-s"
                iconName={data.icon.icon}
                className="info"
                whatsappLink={unternehmenData.whatsappLink}
                textSize="fs-4"
                direction="row"
                gap=""
              />
            ))
          ) : (
            <Loader color="secondary" height="icon-s" iconAsHeight />
          )}
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

// Bar
const Bar = ({ fetchData, fetchNavigationData }) => {
  const ref = useRef();
  const dispatch = useGlobalState()[1];
  const [background, setBackground] = useState(defaultPurple);
  const [navigationNames, setNavigationNames] = useState(null);

  useEffect(() => {
    fetchData().then((res) => {
      setBackground(
        createImgUrl(res.data.attributes.hintergrund.data.attributes.url)
      );
    });

    fetchNavigationData().then((res) => {
      setNavigationNames(res.data.attributes);
    });
  }, [fetchData, fetchNavigationData]);

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
    <BarWrapper bgImage={background} ref={ref}>
      <SpaceWrapper
        spacing={{ top: "navbar-inner", bottom: "navbar-inner" }}
        className="navbuttons"
      >
        {navigationNames &&
          navigationLinks.map((navigation, key) => (
            <NavButton
              key={key}
              to={navigation.to}
              text={Object.values(navigationNames)[key]}
            />
          ))}
      </SpaceWrapper>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  position: sticky;
  top: -1px;
  z-index: 999;
  .navbuttons {
    background-color: var(--secondary);
    /* backdrop-filter: blur(5px); */
    display: flex;
    gap: var(--navbar-gap);
    justify-content: center;
  }
`;

// Bottom
const Bottom = ({ fetchData }) => {
  const [logo, setLogo] = useState(null);
  const [background, setBackground] = useState(defaultPurple);
  useEffect(() => {
    fetchData().then((res) => {
      setBackground(
        createImgUrl(res.data.attributes.hintergrund.data.attributes.url)
      );
      setLogo(createImgUrl(res.data.attributes.logo.data.attributes.url));
    });
  }, [fetchData]);

  return (
    <BottomWrapper
      bgimg={background}
      className={useGlobalState()[0].navbarStuck ? "stuck" : ""}
    >
      <div className="logo-container">
        <SpaceWrapper spacing={{ top: "navbar-inner" }} className="filter">
          {logo ? (
            <img src={logo} alt="logo-text" />
          ) : (
            <Loader spinner height="navbar-logo-height" />
          )}
        </SpaceWrapper>
      </div>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  .logo-container {
    background-image: url(${(props) => props.bgimg});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    .filter {
      background-color: var(--background-filter-dark);
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

    .loader {
      margin: 0 auto;
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




