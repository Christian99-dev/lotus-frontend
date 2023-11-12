import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../../utils/SpaceWrapper";
import { device } from "../../theme/breakpoints";
import { Link, graphql, useStaticQuery } from "gatsby";
import { WhatsappTooltip } from "../Global/WhatsappTooltip";
import IconAndText from "../Global/IconAndText";
import useGlobalData from "../../utils/useGlobalData";

export default function Footer() {
  const { adressSpalte, kontaktSpalte } = useStaticQuery(graphql`
    {
      strapiFooter {
        adressSpalte: AdressSpalte {
          globalID
        }
        kontaktSpalte: KontaktSpalte {
          global: Global {
            globalID
          }
          icon: Icon {
            iconID
          }
        }
      }
    }
  `).strapiFooter;

  const { parse } = useGlobalData();

  return (
    <footer>
      <WhatsappTooltip />
      <FooterWrapper
        spacing={{
          top: "footer-tb-border",
          bottom: "footer-tb-border",
          left: "border",
          right: "border",
        }}
      >
        <div className="col">
          <div className="head">Kontakt</div>

          {kontaktSpalte.map((data, key) => {
            return (
              <IconAndText
                iconName={data.icon.iconID}
                text={parse(data.global.globalID)}
                key={key}
                gap="footer-inner-s"
                textsize="fs-4"
                fontWeight="semibold"
                iconHeight="icon-s"
                direction="row"
                className="row icon"
              />
            );
          })}
        </div>

        <div className="col">
          <div className="head">Adresse</div>
          {adressSpalte.map((data, key) => {
            return (
              <div className="row" key={key}>
                {parse(data.globalID)}
              </div>
            );
          })}
        </div>

        <div className="col">
          <div className="head">Rechtliches</div>
          <Link className="row" to="/impressum">
            Impressum & Datenschutzerklärung
          </Link>
          <Link className="row" to="/agb">
            AGB
          </Link>
          {/* eslint-disable-next-line*/}
          <div className="row" onClick={() => UC_UI.showSecondLayer()}>
            Cookie-Einstellungen
          </div>
        </div>
      </FooterWrapper>
    </footer>
  );
}

const FooterWrapper = styled(SpaceWrapper)`
  color: var(--secondary);
  background-color: var(--primary);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .col:nth-child(2) {
    justify-self: center;
  }

  .col:nth-child(3) {
    justify-self: end;
  }

  .loader {
    margin: 0 auto;
  }

  .head {
    font-size: var(--fs-3);
    font-weight: var(--semibold);
    margin-bottom: var(--footer-inner-m);
  }

  a {
    display: block;
    text-decoration: none;
    color: var(--secondary);
    transition: color 0.1s ease;
    &:hover {
      color: var(--pink);
    }
  }

  .row {
    cursor: pointer;
    transition: color 0.1s ease;
    &:hover {
      color: var(--pink);
    }

    &.icons {
      display: flex;
      justify-content: space-between;
    }

    &.icon {
      display: flex;
      gap: var(--footer-inner-s);
    }
    font-size: var(--fs-4);
    font-weight: var(--medium);
    margin-top: var(--footer-inner-s);
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: var(--footer-inner-l);

    .row {
      &.icons {
        justify-content: center;
        gap: var(--footer-inner-m);
      }

      &.icon {
        justify-content: center;
      }
    }
  }
`;
