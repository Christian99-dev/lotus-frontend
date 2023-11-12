import React from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const WhatsappTooltipWrapper = ({ children }) => {
  const { qrCode } = useStaticQuery(graphql`
    {
      strapiGlobal {
        qrCode: WhatsappQRCode {
          alternativeText
          localFile {
            url
          }
        }
      }
    }
  `).strapiGlobal;
  const tooltip = (
    <div className="tooltip">
      <img
        src={qrCode.localFile.url}
        alt={qrCode.alternativeText}
        className="qrcode"
      />
    </div>
  );
  return (
    <div
      data-tooltip-id="my-tooltip"
      data-tooltip-html={ReactDOMServer.renderToStaticMarkup(tooltip)}
    >
      {children}
    </div>
  );
};
export default WhatsappTooltipWrapper;

export const WhatsappTooltip = () => (
  <Wrapper>
    <Tooltip id="my-tooltip" />
  </Wrapper>
);

const Wrapper = styled.div`
  .react-tooltip {
    z-index: 150;
    transition: opacity 0.2s ease;
    padding: var(--whatsapp-tooltip-qrcode-padding);

    background-color: var(--primary);
    .tooltip {
      .qrcode {
        height: var(--whatsapp-tooltip-qrcode-height);
      }
    }
  }
`;
