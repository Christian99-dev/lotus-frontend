import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../../utils/SpaceWrapper";
import Icon from "./Icon";

export default function Card({ title, text, icon }) {
  return (
    <CardWrapper>
      <div className="title">{title}</div>
      <SpaceWrapper spacing={{top: 20, bottom: 20}} margin className="text scrollbar1">
        {text}
      </SpaceWrapper>
      <Icon name={icon} height="50px" color="purple" className="icon" />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background: var(--secondary);
  padding: 50px;
  border-radius: 20px;
  color: var(--primary);
  flex-basis: 23%;
  

  .title {
    font-size: var(--fs-2);
    text-align: left;
    font-weight: var(--semibold);
  }
  .text {
    font-size: var(--fs-4);
    font-weight: var(--medium);
    height: 150px;
    overflow: hidden;
    overflow-y: scroll;
  }

  .icon{
    display: block;
    margin: 0 auto;
  }
`;
