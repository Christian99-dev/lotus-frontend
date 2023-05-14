import React from "react";
import styled from "styled-components";
import Time from "../../media/icons/time.svg";
import Mail from "../../media/icons/mail.svg";
import Phone from "../../media/icons/phone.svg";
import Wrench from "../../media/icons/wrench.svg";
import Sync from "../../media/icons/sync.svg";
import Drop from "../../media/icons/drop.svg";
import Location from "../../media/icons/location.svg";
import StarFull from "../../media/icons/star-full.svg";
import StarHalf from "../../media/icons/star-half.svg";
import StarEmpty from "../../media/icons/star-empty.svg";
import Facebook from "../../media/icons/facebook.svg";
import Instagram from "../../media/icons/instagram.svg";
import Whatsapp from "../../media/icons/whatsapp.svg";
import Close from "../../media/icons/close.svg";
import Menu from "../../media/icons/menu.svg";
import Arrow from "../../media/icons/arrow.svg";
import Open from "../../media/icons/open.svg";
import Cash from "../../media/icons/cash.svg";

export default function Icon({ name, height, color, link, ...props }) {
  let icon;
  if (name === "time") icon = Time;
  if (name === "mail") icon = Mail;
  if (name === "phone") icon = Phone;
  if (name === "wrench") icon = Wrench;
  if (name === "sync") icon = Sync;
  if (name === "drop") icon = Drop;
  if (name === "location") icon = Location;
  if (name === "starFull") icon = StarFull;
  if (name === "starHalf") icon = StarHalf;
  if (name === "starEmpty") icon = StarEmpty;
  if (name === "facebook") icon = Facebook;
  if (name === "instagram") icon = Instagram;
  if (name === "whatsapp") icon = Whatsapp;
  if (name === "close") icon = Close;
  if (name === "menu") icon = Menu;
  if (name === "arrow") icon = Arrow;
  if (name === "open") icon = Open;
  if (name === "cash") icon = Cash;

  height = isNaN(height)
    ? (height = `var(--${height})`)
    : (height = height + "px");

  if (link)
    return (
      <a href={link}>
        <Wrapper
          className="isLink"
          src={icon}
          alt="icon"
          height={height}
          color={color}
          {...props}
        />
      </a>
    );

  return (
    <Wrapper src={icon} alt="icon" height={height} color={color} {...props} />
  );
}

const Wrapper = styled.img`
  height: ${(props) => props.height};
  filter: ${(props) =>
    props.color === "purple"
      ? "var(--primary-filter);"
      : props.color === "yellow"
      ? "var(--yellow-filter);"
      : "var(--secondary-filter);"};

  &.isLink {
    transition: filter 0.1s ease;
    :hover {
      cursor: pointer;
      filter: var(--pink-filter);
    }
  }
`;
