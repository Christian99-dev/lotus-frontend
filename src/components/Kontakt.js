import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Icon from "./Global/Icon";
import Title from "./Global/Titel";
import Input from "./../components/Global/Input";
import Button from "./Global/Button";
import bgimg from "../media/images/img3.png";
import { Parallax } from "react-parallax";
import MapsWrapper from "../components/Global/MapsWrapper";
import { device } from "../theme/breakpoints";

export default function Kontakt({ ...props }) {
  return (
    <div id="contact">
      <KontaktWrapper bgImage={bgimg} strength={500} {...props}>
        {/* id anchor */}
        <div id="contact" />
        <div className="filter">
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
                text="Kontaktieren sie uns"
                spacing={{ bottom: "team-m-space" }}
              />
              <Info
                icon="phone"
                text="01567 / 482375"
                spacing={{ bottom: "team-s-space" }}
              />
              <Info
                icon="location"
                text="Neue Roßstr. 15, 66128 Saarbrücken"
                spacing={{ bottom: "team-m-space" }}
              />
              <div className="form">
                <Input text="Vorname" className="a" error />
                <Input text="Nachname" className="b" />
                <Input text="Nachricht" className="c" textarea />
                <Input text="Email" className="d" />
                <Input text="Telefonnummer" className="e" />
                <Input text="Straße + Hausnummer" className="f" />
                <Input text="Plz + Ort" className="g" />
                <Button
                  text="Absenden"
                  color="transparent"
                  className="button"
                />
              </div>
            </div>
            <div className="right">
              <MapsWrapper />
            </div>
          </SpaceWrapper>
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
