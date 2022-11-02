import React from "react";
import styled from "styled-components";
import SpaceWrapper from "../../utils/SpaceWrapper";
import TextWithBackground from "./TextWithBackground";

export default function Person({ img, text, name, jobTitle, right, ...props }) {
  return (
    <PersonWrapper img={img} right={right} {...props}>
      <div className="img" />
      <SpaceWrapper className="info-box">
        <TextWithBackground spacing={{ bottom: 5 }} text={name} fontSize="2" />
        <TextWithBackground
          spacing={{ bottom: 15 }}
          text={jobTitle}
          fontSize="3"
        />
        <div className="text">{text}</div>
      </SpaceWrapper>
    </PersonWrapper>
  );
}

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.right ? "row-reverse" : "inherit")};

  .img {
    min-width: 250px;
    flex: 1 1 0;
    height: 500px;
    background: center / cover no-repeat url(${(props) => props.img});
  }

  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};
    padding: ${(props) => (props.right ? "0  50px  50px 0" : "50px 0 0 50px ")};
    text-align: ${(props) => (props.right ? "right" : "left")};
    flex: 1 1 0;
    .text {
      font-size: var(--fs-4);
      color: var(--primary);
      font-weight: var(--medium);
    }
  }
`;
