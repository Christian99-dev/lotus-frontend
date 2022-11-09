import React from "react";
import styled from "styled-components";
import Circle from "../../media/illu/circle.svg";
const Bubble = ({ size = 100, top = 0, right = 0, bottom = 0, left = 0 }) => {
  return (
    <Wrapper
      src={Circle}
      height={size + "px"}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    />
  );
};

export default Bubble;

const Wrapper = styled.img`
  position: absolute;
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;
