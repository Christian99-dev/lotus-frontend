import React from "react";
import styled from "styled-components";

export default function Icon({ name, height, color, link, ...props }) {
  const iconPath = `/icons/${name}.svg`;

  height = isNaN(height)
    ? (height = `var(--${height})`)
    : (height = height + "px");

  if (link)
    return (
      <a href={link}>
        <Wrapper
          className="isLink"
          src={iconPath}
          alt="icon"
          height={height}
          color={color}
          {...props}
        />
      </a>
    );

  return (
    <Wrapper src={iconPath} alt="icon" height={height} color={color} {...props} />
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
    &:hover {
      cursor: pointer;
      filter: var(--pink-filter);
    }
  }
`;