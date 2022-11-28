import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function NavButton({ text, className, ...props }) {
  return <Wrapper className={className} {...props}>{text}</Wrapper>;
}

const Wrapper = styled(Link)`
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
    transition: width var(--transition-time) ease-out;
  }

  &:hover {
    cursor: pointer;
    &:after {
      transition: width var(--transition-time) ease-out;
      width: 100%;
    }
  }

  &.active:after {
    color: red;
    width: 100%;
  }
`;
