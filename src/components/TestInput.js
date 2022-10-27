import React from "react";
import styled from "styled-components";

const TestInput = () => {
  return (
    <Wrapper>
      <input className="effect-1" type="text" placeholder="sss" />
      <span className="focus-border">
        <i></i>
      </span>
    </Wrapper>
  );
};

export default TestInput;

const Wrapper = styled.div`
   .effect-1{border: 0; padding: 7px 0; border-bottom: 1px solid #ccc;}

.effect-1 ~ .focus-border{position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background-color: #3399FF; transition: 0.4s;}
.effect-1:focus ~ .focus-border{width: 100%; transition: 0.4s;}
  
`;
