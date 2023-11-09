import React from "react";
import ReactDOMServer from "react-dom/server";
import QRDummy from "../../media/images/QR1.jpg";
import styled from "styled-components";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useEffect } from "react";
import { useState } from "react";
import { getUnternehmen } from "../../_api/axios";
import { createImgUrl } from "../../utils/utils";

const WhatsappTooltipWrapper = ({ children }) => {
  const [qrcode, setQrcode] = useState(QRDummy);

  useEffect(() => {
    getUnternehmen().then((res) => {
      setQrcode(createImgUrl(res.data.attributes.QR_Whatsapp.data.attributes.url));
    });
  }, [getUnternehmen]);
  
  const tooltip = (
    <div className="tooltip">
      {qrcode && <img className="qrcode" src={qrcode} alt="qr-code" />}
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
