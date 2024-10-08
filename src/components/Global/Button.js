import React from "react";
import { Link } from "react-scroll";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { navButtonSetting } from "../../utils/constants";
import SpaceWrapper from "../../utils/SpaceWrapper";

export default function Button({ color, text, spacing, to, link, type, ...props }) {
  const theme = {
    shadow: "none",
    color: "var(--primary)",
    backgroundColor: "var(--secondary)",
    hoverColor: "var(--secondary)",
    hoverBackgroundColor: "var(--primary)",
  };

  if (color === "purple") {
    theme.shadow = "none";
    theme.color = "var(--secondary)";
    theme.backgroundColor = "var(--primary)";
    theme.hoverColor = "var(--primary)";
    theme.hoverBackgroundColor = "var(--secondary)";
  }

  if (color === "transparent") {
    theme.shadow = "inset 0px 0px 0px 5px var(--secondary)";
    theme.color = "var(--secondary)";
    theme.backgroundColor = "transparent";
    theme.hoverColor = "var(--primary)";
    theme.hoverBackgroundColor = "var(--secondary)";
  }

  if (to) {
    return (
      <Link to={to} {...navButtonSetting} href="#">
        <SpaceWrapper spacing={spacing} {...props}>
          <Wrapper type={type} theme={theme}>{text}</Wrapper>
        </SpaceWrapper>
      </Link>
    );
  }

  if (link)
    return (
      <GatsbyLink to={`${link}`}>
        <SpaceWrapper spacing={spacing} {...props}>
          <Wrapper type={type} theme={theme}>{text}</Wrapper>
        </SpaceWrapper>
      </GatsbyLink>
    );

  return (
    <SpaceWrapper spacing={spacing} {...props}>
      <Wrapper type={type} theme={theme}>{text}</Wrapper>
    </SpaceWrapper>
  );
}

const Wrapper = styled.button`
  padding-top: var(--button-padding-top);
  padding-bottom: var(--button-padding-bottom);
  padding-left: var(--button-padding-left);
  padding-right: var(--button-padding-right);
  font-size: var(--fs-3);
  font-weight: var(--semibold);
  border-radius: 10px;
  border: none;
  width: 100%;

  box-shadow: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.color};
  background: linear-gradient(
    to right,
    ${(props) => props.theme.hoverBackgroundColor} 50%,
    ${(props) => props.theme.backgroundColor} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: ease var(--transition-time) all;
  &:hover {
    background-position: left bottom;
    transition: ease var(--transition-time) all;
    color: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
`;
