import React from "react";
import styled from "styled-components";

export default function NavButton({ text, className }) {
  return <Wrapper className={className}>{text}</Wrapper>;
}

const Wrapper = styled.div`
  font-size: var(--fs-3);
  font-weight: var(--semibold);
  color: var(--primary);
  display: inline-block;
  position: relative;

 

  &:after {
    content: "";
    position: absolute;
    width: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    border-radius: 10px;
    background-color: var(--primary);
    transition: width 0.25s ease-out;
  }

  &:hover:after {
    transition: width 0.25s ease-out;
    width: 100%;
  }

  &.active:after {
    color: red;
    width: 100%;
  }

  
`;
