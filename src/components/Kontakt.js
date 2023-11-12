import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Icon from "./Global/Icon";
import Title from "./Global/Titel";
import Parallax from "./Global/Parallax";
import Maps from "./Global/Maps";
import { device, size } from "../theme/breakpoints";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Global/Form";
import useWindowDimensions from "../utils/useWindowDimensions";
import { validGermanPhoneNumber } from "../utils/regex";
import WhatsappTooltipWrapper, {
  WhatsappTooltip,
} from "./Global/WhatsappTooltip";
import IconAndText from "./Global/IconAndText";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useGlobalData from "../utils/useGlobalData";

export default function Kontakt() {
  const {
    strapiGlobal: { qrCode, whatsappLink },
    strapiKontakt: {
      subUeberschrift,
      ueberschrift,
      hintergrund,
      informationsZeilen,
    },
  } = useStaticQuery(graphql`
    {
      strapiGlobal {
        whatsappLink: WhatsappLink
        qrCode: WhatsappQRCode {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      strapiKontakt {
        subUeberschrift: SubUeberschrift
        ueberschrift: Ueberschrift
        hintergrund: Hintergrund {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        informationsZeilen: InformationsZeilen {
          global: Global {
            globalID
          }
          icon: Icon {
            iconID
          }
        }
      }
    }
  `);

  const { width } = useWindowDimensions();
  const { parse } = useGlobalData();
  return (
    <div id="contact">
      <WhatsappTooltip />
      <KontaktWrapper>
        <div className="filter">
          <Parallax strength={400} className="background">
            <GatsbyImage
              image={getImage(hintergrund.localFile)}
              alt={hintergrund.alternativeText}
            />
          </Parallax>
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
                text={ueberschrift}
                spacing={{ bottom: "team-xxs-space" }}
              />
              <SpaceWrapper
                className="subtitle"
                spacing={{ bottom: "team-xxs-space" }}
              >
                {subUeberschrift}
              </SpaceWrapper>

              <SpaceWrapper
                className="whatsapplink-wrapper"
                spacing={{ bottom: "team-m-space" }}
              >
                <a href={whatsappLink}>
                  <GatsbyImage
                    image={getImage(qrCode.localFile)}
                    alt={qrCode.alternativeText}
                    className="qr-code"
                  />
                </a>
              </SpaceWrapper>

              <SpaceWrapper
                className="infos"
                spacing={{ bottom: "team-m-space" }}
              >
                {informationsZeilen.map((info, key) => {
                  console.log(info);
                  return (
                    <IconAndText
                      iconName={info.icon.iconID}
                      text={parse(info.global.globalID)}
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
              <Form />
            </div>
            <div className="right">
              <Maps />
            </div>
          </SpaceWrapper>
        </div>
      </KontaktWrapper>
    </div>
  );
}

const KontaktWrapper = styled.div`
  .filter {
    position: relative;
    background: var(--background-filter-primary);
    .background {
      z-index: -100;
      img {
        z-index: -100;
      }
    }
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

      .qr-code {
        cursor: pointer;
        height: var(--contact-qr-code-height);
        text-align: center;
        img {
          width: min-content;
          margin: 0 auto;
        }
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
      .whatsapplink-wrapper{
        text-align: center;
      }
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
