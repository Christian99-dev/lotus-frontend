import React from "react";
import { useEffect } from "react";
import { getUnternehmen } from "../../_api/axios";
import { useState } from "react";
import Icon from "./Icon";
import styled from "styled-components";
import { validGermanPhoneNumber } from "../../utils/regex";
import WhatsappTooltipWrapper from "../Global/WhatsappTooltip";

const IconAndText = ({
  iconHeight,
  iconName,
  text,
  gap,
  className,
  direction,
  textSize,
  fontWeight,
  center,
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getUnternehmen().then((res) => {
      setData(res.data.attributes);
    });
  }, [getUnternehmen]);

  let linkForText = null;
  let linkForIcon = null;

  if (data) {
    if (iconName === "mail") linkForIcon = `mailto:${data.email}`;
    if (iconName === "whatsapp") linkForIcon = `tel:${data.whatsappLink}`;
    if (iconName === "time") linkForIcon = `tel:${data.nummer}`;
    if (iconName === "phone") linkForIcon = `tel:${data.nummer}`;

    if (text === data.email) linkForText = `mailto:${data.email}`;
    if (validGermanPhoneNumber.test(text)) linkForText = `tel:${data.nummer}`;
    if (text === data.oeffnungszeiten) linkForText = `tel:${data.nummer}`;
  }

  return (
    data && (
      <IconAndTextWrapper
        gap={gap}
        className={className}
        direction={direction}
        textSize={textSize}
        fontWeight={fontWeight}
        center={center}
      >
        {iconName === "whatsapp" ? (
          <WhatsappTooltipWrapper>
            <Icon name={iconName} height={iconHeight} link={linkForIcon} />
          </WhatsappTooltipWrapper>
        ) : (
          <Icon name={iconName} height={iconHeight} link={linkForIcon} />
        )}

        {linkForText ? (
          <a href={linkForText} className="text">
            {text}
          </a>
        ) : (
          <div className="text">{text}</div>
        )}
      </IconAndTextWrapper>
    )
  );
};

export default IconAndText;

const IconAndTextWrapper = styled.div`
  font-size: var(--fs-3);
  font-weight: var(--medium);
  color: var(--secondary);
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 10px;

  ${(props) => props.textSize && `font-size: var(--${props.textSize});`}
  ${(props) => props.direction && `flex-direction: ${props.direction};`}
  ${(props) => props.gap && `gap: var(--${props.gap});`}
  ${(props) => props.fontWeight && `font-weight: var(--${props.fontWeight});`}

  a {
    color: var(--secondary);
    text-decoration: none;
    transition: color ease 0.1s;

    &:hover {
      transition: color ease 0.1s;
      color: var(--pink);
    }
  }
`;
