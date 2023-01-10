import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../../utils/SpaceWrapper";

export default function TextWithBackground({
  text,
  color,
  fontSize,
  spacing,
  loading,
  ...props
}) {
  return (
    <SpaceWrapper spacing={spacing} {...props}>
      <Wrapper className={loading ? "loading" : ""} theme={color} fontSize={`var(--fs-${fontSize})`}>
        {loading ? "loading...": text}
      </Wrapper>
    </SpaceWrapper>
  );
}

const Wrapper = styled.div`
  padding: 1px;
  margin: 0px;
  display: inline;

  font-size: ${(props) => props.fontSize};
  font-weight: var(--semibold);
  background-color: ${(props) =>
    props.theme === "purple" ? "var(--primary)" : "var(--secondary)"};
  color: ${(props) =>
    props.theme === "purple" ? "var(--secondary)" : "var(--primary)"};

  transition: all 0.2s;
  :hover {
    transition: all 0.2s;
    background-color: ${(props) =>
      props.theme !== "purple" ? "var(--primary)" : "var(--secondary)"};
    color: ${(props) =>
      props.theme !== "purple" ? "var(--secondary)" : "var(--primary)"};
  }

  &.loading{
    color: ${(props) =>
    props.theme !== "purple" ? "var(--secondary)" : "var(--primary)"};
  }
`;
