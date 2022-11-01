import React from "react";
import styled from "styled-components";
import Time from "../../media/icons/time.svg";
import Mail from "../../media/icons/mail.svg";
import Phone from "../../media/icons/phone.svg";

export default function Icon({ name, height, color }) {
  let icon;

  if (name === "time") icon = Time;
  if (name === "mail") icon = Mail;
  if (name === "phone") icon = Phone;

  return <Wrapper src={icon} alt="icon" height={height} color={color} />;
}

const Wrapper = styled.img`
  height: ${(props) => props.height};
  filter: ${(props) =>
    props.color === "purple"
      ? "var(--primary-filter);"
      : "var(--secondary-filter);"};
`;
