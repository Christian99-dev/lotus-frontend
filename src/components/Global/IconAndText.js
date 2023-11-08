import React from "react";
import Icon from "./Icon";
import styled from "styled-components";
import { validGermanPhoneNumber } from "../../utils/regex";
import WhatsappTooltipWrapper from "../Global/WhatsappTooltip";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { size } from "../../theme/breakpoints";
import useGlobalData from "../../utils/useGlobalData";

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
  const width = useWindowDimensions().width;

  const data = useGlobalData().data;
  let linkForText = null;
  let linkForIcon = null;

  if (iconName === "mail") linkForIcon = `mailto:${data.Email}`;
  if (iconName === "whatsapp") linkForIcon = `${data.WhatsappLink}`;
  if (iconName === "time") linkForIcon = `tel:${data.Nummer}`;
  if (iconName === "phone") linkForIcon = `tel:${data.Nummer}`;

  if (text === data.Email) linkForText = `mailto:${data.Email}`;
  if (validGermanPhoneNumber.test(text)) linkForText = `tel:${data.Nummer}`;
  if (text === data.Oeffnungszeiten) linkForText = `tel:${data.Nummer}`;

  return (
    <IconAndTextWrapper
      gap={gap}
      className={className}
      direction={direction}
      textSize={textSize}
      fontWeight={fontWeight}
      center={center}
    >
      {iconName === "whatsapp" && width > size.tablet ? (
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
