import React from "react";
import styled from "styled-components";
import Time from "../../media/icons/time.svg";
import Mail from "../../media/icons/mail.svg";
import Phone from "../../media/icons/phone.svg";
import Wrench from "../../media/icons/wrench.svg";
import Sync from "../../media/icons/sync.svg";
import Drop from "../../media/icons/drop.svg";
import Location from "../../media/icons/location.svg";

export default function Icon({ name, height, color, ...props }) {
  let icon;

  if (name === "time") icon = Time;
  if (name === "mail") icon = Mail;
  if (name === "phone") icon = Phone;
  if (name === "wrench") icon = Wrench;
  if (name === "sync") icon = Sync;
  if (name === "drop") icon = Drop;
  if (name === "location") icon = Location;

  return <Wrapper src={icon} alt="icon" height={height} color={color} {...props} />;
}

const Wrapper = styled.img`
  height: ${(props) => props.height};
  filter: ${(props) =>
    props.color === "purple"
      ? "var(--primary-filter);"
      : "var(--secondary-filter);"};
`;
