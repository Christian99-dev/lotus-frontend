import React from "react";
import styled from "styled-components";
const FontsDebug = () => {
  return (
    <Wrapper>
      <div className="--fs-1">--fs-1 abcd</div>
      <div className="--fs-2">--fs-2 abcd</div>
      <div className="--fs-3">--fs-3 abcd</div>
      <div className="--fs-4">--fs-4 abcd</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: antiquewhite;
  text-align: center;

  div {
    padding: 20px;
  }
  .--fs-1 {
    font-size: var(--fs-1);
  }
  .--fs-2 {
    font-size: var(--fs-2);
  }
  .--fs-3 {
    font-size: var(--fs-3);
  }
  .--fs-4 {
    font-size: var(--fs-4);
  }
`;

export default FontsDebug;
