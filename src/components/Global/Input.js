import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../utils/SpaceWrapper";

export default function Input({ text, spacing }) {
  return (
    <SpaceWrapper spacing={spacing}>
      <Wrapper placeholder={text} />
    </SpaceWrapper>
  );
}

const Wrapper = styled.input`
  color: var(--primary);
  background-color: var(--secondary);
  width: 100%;
  padding-left: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: var(--fs-3);
  font-weight: var(--semibold);
  border-radius: 10px;
  outline: none;
  border: none;
  
  ::placeholder {
    color: var(--primary-dim);
  }
`;
