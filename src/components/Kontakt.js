import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Icon from "./Global/Icon";
import Title from "./Global/Titel";
import { Parallax } from "react-parallax";
import Maps from "./Global/Maps";
import { device, size } from "../theme/breakpoints";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Global/Form";
import { createImgUrl } from "../utils/utils";
import Loader from "./Global/Loader";
import useWindowDimensions from "../utils/useWindowDimensions";
import { validGermanPhoneNumber } from "../utils/regex";
import WhatsappTooltipWrapper, {
  WhatsappTooltip,
} from "./Global/WhatsappTooltip";
import IconAndText from "./Global/IconAndText";

export default function Kontakt({ fetchData, fetchUnternehmenData }) {
  const [data, setData] = useState(null);
  const [background, setBackground] = useState([]);
  const [unternehmenData, setUnternehmenData] = useState(null);

  useEffect(() => {
    fetchUnternehmenData().then((res) => {
      setUnternehmenData(res.data.attributes);
    });

    fetchData().then((res) => {
      setData(res.data.attributes);
      setBackground([
        createImgUrl(res.data.attributes.hintergrund.data.attributes.url),
        createImgUrl(res.data.attributes.hintergrundMobile.data.attributes.url),
      ]);
    });
  }, [fetchData, fetchUnternehmenData]);

  const width = useWindowDimensions().width;
  return (
    <div id="contact">
      <WhatsappTooltip />
      <KontaktWrapper
        bgImage={
          useWindowDimensions().width > size.tablet
            ? background[0]
            : background[1]
        }
        strength={500}
      >
        {/* id anchor */}
        <div id="contact" />
        <div className="filter">
          {data && unternehmenData ? (
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
                  spacing={{ bottom: "team-xxs-space" }}
                />
                <SpaceWrapper
                  className="subtitle"
                  spacing={{ bottom: "team-m-space" }}
                >
                  {data.subUeberschrift}
                </SpaceWrapper>
                <SpaceWrapper
                  className="infos"
                  spacing={{ bottom: "team-m-space" }}
                >
                  {data.infos.map((info, key) => {
                    return (
                      <IconAndText
                        iconName={info.icon.icon}
                        text={info.text.info}
                        key={key}
                        gap="team-xs-space"
                        direction={width > size.tablet && "row"}
                        textSize="fs-2"
                        fontWeight="semibold"
                        iconHeight="icon-m"
                      />
                    );
                  })}
                </SpaceWrapper>

                {/** FORM */}
                <Form data={data} />
              </div>
              <div className="right">
                <Maps />
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

      .subtitle {
        color: var(--secondary);
      }

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
        .subtitle {
          text-align: center;
        }
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

function Info({ spacing, icon, text, link }) {
  const width = useWindowDimensions().width;
  return (
    <InfoWrapper spacing={spacing}>
      {icon === "whatsapp" && width > size.tablet ? (
        <WhatsappTooltipWrapper>
          <Icon name={icon} height="icon-m" link={link} />
        </WhatsappTooltipWrapper>
      ) : (
        <Icon name={icon} height="icon-m" link={icon === "whatsapp" && link} />
      )}

      {!validGermanPhoneNumber.test(text) ? (
        <div className="text">{text}</div>
      ) : (
        <a className="text" href={`tel:${text}`}>
          {text}
        </a>
      )}
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
    text-decoration: none;
  }

  @media ${device.tablet} {
    flex-direction: column;
    .text {
      text-align: center;
    }
    a {
      text-align: center;
    }
  }
`;
