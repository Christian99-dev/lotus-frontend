import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Titel from "./Global/Titel";
import { Parallax } from "react-parallax";
import Loader from "./Global/Loader";
import { device, size } from "../theme/breakpoints";
import { createImgUrl, parser } from "../utils/utils";
import useWindowDimensions from "../utils/useWindowDimensions";


export default function Panel({ fetchData }) {
  const [data, setData] = useState(null);
  const [logo, setLogo] = useState(null);
  const [background, setBackground] = useState([null]);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
      setBackground([
        createImgUrl(res.data.attributes.hintergrund.data.attributes.url),
        createImgUrl(res.data.attributes.hintergrundMobile.data.attributes.url)
      ]);
      setLogo(
        createImgUrl(res.data.attributes.logo_textless.data.attributes.url)
      );
    });
  }, [fetchData]);

  return (
    <div id="panel">
      <PannelWrapper bgImage={useWindowDimensions().width > size.tablet ? background[0] : background[1]} strength={200}>
        <SpaceWrapper className="box">
          {data ? (
            <Titel text={data.ueberschrift} spacing={{ bottom: 50 }} />
          ) : (
            <Loader title color="secondary" spacing={{ bottom: 50 }} />
          )}
          {data ? (
            <div className="text" id="panel">
              {logo && <img className="logo" src={logo} alt="logo" />}
              {parser(data.text)}
            </div>
          ) : (
            <Loader height="fs-3" color="secondary" className="center-loader" />
          )}
        </SpaceWrapper>
        <div className="img" />
      </PannelWrapper>
    </div>
  );
}

const PannelWrapper = styled(Parallax)`
  .box {
    width: 50%;
    box-sizing: border-box;
    padding: var(--pannel-inner) var(--border);
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    background-color: var(--primary-transparent);
    position: relative;
    .text {
      .logo {
        top: 10%;
        left: 10%;
        position: absolute;
      }
      color: var(--secondary);
      font-size: var(--fs-4);
      font-weight: var(--medium);
    }

    @media ${device.tablet} {
      .center-loader {
        div {
          margin: 0 auto;
        }
      }
    }
  }

  @media ${device.laptop} {
    .box {
      width: 65%;
    }
  }

  @media ${device.tablet} {
    .react-parallax-bgimage {
      height: var(--pannel-height-mobile) !important;
    }
    height: var(--pannel-height-mobile);
    .box {
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
      width: 100%;
      .text {
        .logo {
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
          top: 10%;
          left: 0;
          right: 0;
          bottom: 0;
        }
        text-align: center;
      }
      .logo {
        left: 50%;
      }
    }
  }
`;
