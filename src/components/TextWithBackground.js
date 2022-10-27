import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";

export default function TextWithBackground ({ text, color, fontSize, spacing }) {

      console.log(color);
  return (
    <SpaceWrapper spacing={spacing}>
      <Wrapper theme={color} fontSize={`var(--fs-${fontSize})`}>
        {text}
      </Wrapper>
    </SpaceWrapper>
  );
};

const Wrapper = styled.div`
  padding: 1px;
  margin: 0px;
  display: inline;

  font-size: ${(props) => props.fontSize};
  font-weight: var(--semibold);
  background-color: ${(props) => props.theme === "purple" ? "var(--primary)" : "var(--secondary)"};
  color: ${(props) => props.theme === "purple" ? "var(--secondary)" : "var(--primary)"};
`;
