import React from "react";
import styled from "styled-components";
import { validEmail, validGermanPhoneNumber } from "../../utils/regex";
import SpaceWrapper from "../../utils/SpaceWrapper";
import Icon from "../Global/Icon";

export default function TextWithBackground({
  tag = "div",
  text,
  color,
  fontSize,
  spacing,
  transparent,
  ...props
}) {
  let className = "";
  if (transparent) className += " transparent";

  return (
    <SpaceWrapper spacing={spacing} {...props}>
      <Wrapper
        className={className}
        theme={color}
        fontSize={`var(--fs-${fontSize})`}
        transparent={transparent}
      >
        {!validGermanPhoneNumber.test(text) && !validEmail.test(text) ? (
          <>
            {tag === "h2" && <h2>{text}</h2>}
            {tag === "h3" && <h3>{text}</h3>}
            {tag === "h4" && <h4>{text}</h4>}
            {tag === "p" && <p>{text}</p>}
            {tag === "div" && text}
          </>
        ) : validGermanPhoneNumber.test(text) ? (
          <>
            <Icon name="phone" className="icon" />
            <a href={`tel:${text}`}>{text}</a>
          </>
        ) : (
          <a href={`mailto:${text}`}>{text}</a>
        )}
      </Wrapper>
    </SpaceWrapper>
  );
}

const Wrapper = styled.div`
  h2, h1 , h3 , h4 , p{
    all: unset;
  }
  padding: 1px;
  margin: 0px;
  display: inline-block;

  position: relative;
  text-align: center;

  .icon {
    position: relative;
    top: 3px;
    margin-right: 10px;
  }

  font-size: ${(props) => props.fontSize};
  font-weight: var(--semibold);
  background-color: ${(props) =>
    props.theme === "purple" ? "var(--primary)" : "var(--secondary)"};

  color: ${(props) =>
    props.theme === "purple" ? "var(--secondary)" : "var(--primary)"};

  a {
    color: ${(props) =>
      props.theme === "purple" ? "var(--secondary)" : "var(--primary)"};
    text-decoration: none;
  }

  transition: all 0.2s;
  &:hover,
  a:hover {
    transition: all 0.2s;
    background-color: ${(props) =>
      props.theme !== "purple" ? "var(--primary)" : "var(--secondary)"};

    color: ${(props) =>
      props.theme !== "purple" ? "var(--secondary)" : "var(--primary)"};
  }

  &.transparent {
    background-color: ${(props) =>
      props.theme === "purple"
        ? "var(--primary-transparent)"
        : "var(--secondary-transparent)"};

    &:hover,
    a:hover {
      background-color: ${(props) =>
        props.theme !== "purple"
          ? "var(--primary-transparent)"
          : "var(--secondary-transparent)"};
    }
  }
`;
