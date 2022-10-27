import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";

export default function Button({ color, text, spacing }) {
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

  return (
    <SpaceWrapper spacing={spacing}>
      <Wrapper theme={theme}>{text}</Wrapper>
    </SpaceWrapper>
  );
}

const Wrapper = styled.button`
  padding: 15px 40px;
  font-size: var(--fs-3);
  font-weight: var(--semibold);
  border-radius: 10px;
  border: none;

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
  :hover {
    background-position: left bottom;
    transition: ease var(--transition-time) all;
    color: ${(props) => props.theme.hoverColor};
  }

  @media (max-width: 820px) {
    padding: 12.5px 35px;
  }

  @media (max-width: 420px) {
    padding: 10px 30px;
  }
`;
