import React from "react";
import styled from "styled-components";
import Icon from "./Global/Icon";
import Titel from "./Global/Titel";
import img from "../media/images/person2.png";
import speech from "../media/icons/speech.svg";
import SpaceWrapper from "../utils/SpaceWrapper";
import MySwiper from "./Global/MySwiper";
import TextWithBackground from "./Global/TextWithBackground";

export default function Testimonial() {
  const comments = [<Comment />, <Comment />, <Comment />];
  return (
    <TestimonialWrapper spacing={{ top: 100, bottom: 200 }}>
      <Titel
        text="Das sagen unsere Kunden"
        color="purple"
        spacing={{ bottom: 100 }}
        center
      />
      <MySwiper array={comments} />
    </TestimonialWrapper>
  );
}

const TestimonialWrapper = styled(SpaceWrapper)``;

const Comment = () => (
  <CommentWrapper>
    <div className="img-container">
      <img className="img" src={img} alt="img" />
      <img className="speech" src={speech} alt="speech" />
    </div>
    <TextWithBackground text="Christian David" fontSize={3} />
    <Stars spacing={{ top: 30, bottom: 30 }} />
    <SpaceWrapper spacing={{ bottom: 40 }} className="text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est
    </SpaceWrapper>
  </CommentWrapper>
);

const CommentWrapper = styled.div`
  text-align: center;

  .img-container {
    display: inline-block;
    position: relative;
    .img {
      border: 5px solid white !important;
      width: 200px !important;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }
    .speech {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 90%;
      right: 0;
      z-index: -1;
    }
  }

  .text {
    margin: 0 auto;
    width: 60%;
    font-size: var(--fs-4);
  }

  .name {
    font-weight: var(--semibold);
    font-size: var(--fs-3);
  }
`;

const Stars = ({ ...props }) => (
  <StarWrapper {...props}>
    <Icon name="starFull" color="yellow" height="25px" />
    <Icon name="starFull" color="yellow" height="25px" />
    <Icon name="starFull" color="yellow" height="25px" />
    <Icon name="starHalf" color="yellow" height="25px" />
    <Icon name="starEmpty" color="yellow" height="25px" />
  </StarWrapper>
);

const StarWrapper = styled(SpaceWrapper)`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
