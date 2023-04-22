import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "../Global/Icon";
import SpaceWrapper from "../../utils/SpaceWrapper";
import { device } from "../../theme/breakpoints";
import { Link } from "gatsby";
import Loader from "../Global/Loader";
import { validEmail, validGermanPhoneNumber } from "../../utils/regex";
import WhatsappTooltipWrapper, {
  WhatsappTooltip,
} from "../Global/WhatsappTooltip";
export default function Footer({ fetchData, fetchUnternehmenData }) {
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
    <>
      <WhatsappTooltip />
      <FooterWrapper
        spacing={{
          top: "footer-tb-border",
          bottom: "footer-tb-border",
          left: "border",
          right: "border",
        }}
      >
        {data && unternehmenData ? (
          <>
            {/* <div className="col">
            <div className="head">Social Media</div>
            <div className="row icons">
              {data.socials.map((icon, key) => {
                return (
                  <Icon
                    name={icon.icon.icon}
                    height="icon-s"
                    link={icon.text}
                    key={key}
                  />
                );
              })}
            </div>
          </div> */}

            <div className="col">
              <div className="head"> Kontakt</div>

              {data.kontakt.map((data, key) => {
                return (
                  <div className="row icon" key={key}>
                    {data.icon.icon === "whatsapp" ? (
                      <WhatsappTooltipWrapper>
                        <Icon
                          name={data.icon.icon}
                          height="icon-s"
                          link={unternehmenData.whatsappLink}
                        />
                      </WhatsappTooltipWrapper>
                    ) : (
                      <Icon
                        name={data.icon.icon}
                        height="icon-s"
                        link={
                          data.icon.icon === "mail" &&
                          validEmail.test(data.text.info) &&
                          `mailto:${data.text.info}`
                        }
                      />
                    )}

                    {!validGermanPhoneNumber.test(data.text.info) &&
                    !validEmail.test(data.text.info) ? (
                      data.text.info
                    ) : validGermanPhoneNumber.test(data.text.info) ? (
                      <a href={`tel:${data.text.info}`}>{data.text.info}</a>
                    ) : validEmail.test(data.text.info) ? (
                      <a href={`mailto:${data.text.info}`}>{data.text.info}</a>
                    ) : (
                      data.text.info
                    )}
                  </div>
                );
              })}
            </div>

            <div className="col">
              <div className="head">Adresse</div>

              {data.adresse.map((data, key) => {
                return (
                  <div className="row" key={key}>
                    {data.info}
                  </div>
                );
              })}
            </div>

            <div className="col">
              <div className="head">Rechtliches</div>
              <Link className="row" to="/impressum">
                Impressum
              </Link>
              <Link className="row" to="/agb">
                AGB
              </Link>
            </div>
          </>
        ) : (
          <Loader spinner className="loader" />
        )}
      </FooterWrapper>
    </>
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
    :hover {
      color: var(--pink);
    }
  }

  .row {
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
