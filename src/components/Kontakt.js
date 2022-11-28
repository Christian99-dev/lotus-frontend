import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";
import Icon from "./Global/Icon";
import Title from "./Global/Titel";
import Input from "./../components/Global/Input";
import Button from "./Global/Button";
import tempimg from "../media/images/maps.png";
import bgimg from "../media/images/img3.png";
import bgfilter from "../media/images/purple.png";
import { Parallax } from "react-parallax";
import MapsWrapper from "../components/Global/MapsWrapper";

export default function Kontakt({...props}) {
  return (
    <KontaktWrapper
      bgImage={bgimg}
      bgfilter={bgfilter}
      tempimg={tempimg}
      strength={500}
      {...props}
    >
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
            <Title text="Kontaktieren sie uns" spacing={{ bottom: 50 }} />
            <Info icon="phone" text="01567 / 482375" spacing={{ bottom: 30 }} />
            <Info
              icon="location"
              text="Neue Roßstr. 15, 66128 Saarbrücken"
              spacing={{ bottom: 50 }}
            />
            <div className="form">
              <Input text="Vorname" className="a" error />
              <Input text="Nachname" className="b" />
              <Input text="Nachricht" className="c" textarea />
              <Input text="Email" className="d" />
              <Input text="Telefonnummer" className="e" />
              <Input text="Straße + Hausnummer" className="f" />
              <Input text="Plz + Ort" className="g" />
              <Button text="Absenden" color="transparent" className="button" />
            </div>
          </div>
          <div className="right">
            <MapsWrapper/>
          </div>
        </SpaceWrapper>
      </div>
    </KontaktWrapper>
  );
}

const KontaktWrapper = styled(Parallax)`
  .filter {
    background: center / cover no-repeat url(${(props) => props.bgfilter});
  }

  .wrapper {
    gap: 50px;
    display: flex;

    .left {
      flex: 1 1 0;
      .form {
        display: grid;
        gap: 20px;
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
      /* background: center / cover no-repeat url(${(props) =>
        props.tempimg}); */
      flex: 1 1 0;
      border-radius: 10px;
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
  gap: 20px;
  .text {
    font-size: var(--fs-2);
    font-weight: var(--semibold);
    color: var(--secondary);
  }
`;
