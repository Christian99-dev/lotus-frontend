import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Icon from "./Global/Icon";
import Title from "./Global/Titel";
import { Parallax } from "react-parallax";
import MapsWrapper from "../components/Global/MapsWrapper";
import { device } from "../theme/breakpoints";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Global/Form";
import { createImgUrl } from "../utils/utils";
import Loader from "./Global/Loader";

export default function Kontakt({ fetchData }) {
  const [data, setData] = useState(null);
  const [background, setBackground] = useState(null);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
      setBackground(
        createImgUrl(res.data.attributes.hintergrund.data.attributes.url)
      );
    });
  }, [fetchData]);

  return (
    <div id="contact">
      <KontaktWrapper bgImage={background} strength={500}>
        {/* id anchor */}
        <div id="contact" />
        <div className="filter">
          {data ? (
            <SpaceWrapper
              spacing={{
                left: "border",
                right: "border",
                top: "contact-inner",
                bottom: "contact-inner",
              }}
              className="wrapper"
            >
              <div className="left">
                <Title
                  text={data.ueberschrift}
                  spacing={{ bottom: "team-m-space" }}
                />
                <SpaceWrapper
                  className="infos"
                  spacing={{ bottom: "team-m-space" }}
                >
                  {data.infos.map((info, key) => {
                    return (
                      <Info
                        icon={info.icon.icon}
                        text={info.text.info}
                        key={key}
                      />
                    );
                  })}
                </SpaceWrapper>

                {/** FORM */}
                <Form data={data} />
              </div>
              <div className="right">
                <MapsWrapper
                  location={[data.mapLocation.lat, data.mapLocation.lng]}
                />
              </div>
            </SpaceWrapper>
          ) : (
            <Loader
              spinner
              spacing={{ top: "contact-inner", bottom: "contact-inner" }}
            />
          )}
        </div>
      </KontaktWrapper>
    </div>
  );
}

const KontaktWrapper = styled(Parallax)`
  .filter {
    background: var(--background-filter-primary);
  }

  .wrapper {
    gap: var(--team-m-space);
    display: grid;
    grid-template-columns: 1fr 1fr;

    .left {
      flex: 1 1 0;

      .infos {
        display: flex;
        flex-direction: column;
        gap: var(--team-s-space);
      }
      .form {
        display: grid;
        gap: var(--team-xs-space);
        grid-template-columns: 1fr 1fr;
        .c,
        .d,
        .e {
          grid-column: 1 / span 2;
        }

        .c {
          grid-row: 2 / span 6;
        }

        .button {
          grid-column: 1 / span 2;
        }
      }
    }

    .right {
      flex: 1 1 0;
      border-radius: 10px;
    }

    @media ${device.laptop} {
      grid-template-columns: 60% 40%;
    }

    @media ${device.tablet} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr var(--contact-maps-height-tablet);

      .left {
        .form {
          grid-template-columns: 1fr;
          .a,
          .b,
          .c,
          .d,
          .e,
          .f,
          .g,
          .button {
            grid-column: unset;
          }
        }
      }
    }
  }
`;

function Info({ spacing, icon, text }) {
  return (
    <InfoWrapper spacing={spacing}>
      <Icon name={icon} height="icon-m" />
      <div className="text">{text}</div>
    </InfoWrapper>
  );
}

const InfoWrapper = styled(SpaceWrapper)`
  display: flex;
  gap: var(--team-xs-space);
  .text {
    font-size: var(--fs-2);
    font-weight: var(--semibold);
    color: var(--secondary);
  }

  @media ${device.tablet} {
    flex-direction: column;
    .text {
      text-align: center;
    }
  }
`;
