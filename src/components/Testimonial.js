import React from "react";
import styled from "styled-components";
import Icon from "./Global/Icon";
import Titel from "./Global/Titel";
import img from "../media/images/person2.png";
import speech from "../media/icons/speech.svg";
import SpaceWrapper from "../utils/SpaceWrapper";
import MySwiper from "./Global/MySwiper";
import TextWithBackground from "./Global/TextWithBackground";
import useWindowDimensions from "../utils/useWindowDimensions";
import { size } from "../theme/breakpoints";

export default function Testimonial({ ...props }) {
  const comments = [<Comment />, <Comment />, <Comment />];
  return (
    <TestimonialWrapper
      id="testimonial"
      spacing={{
        top: "white-component-inner-half",
        bottom: "white-component-inner",
      }}
      {...props}
    >
      <Titel
        text="Unsere Kunden"
        color="purple"
        spacing={{
          bottom: "white-component-inner-half",
          left: "border",
          right: "border"
        }}
        center
      />
      <MySwiper
        array={comments}
        cards={useWindowDimensions().width <= size.tablet}
      />
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
    <Stars
      spacing={{
        top: "testimonial-stars-inner",
        bottom: "testimonial-stars-inner",
      }}
    />
    <SpaceWrapper
      spacing={{ bottom: "testimonial-text-bottom" }}
      className="text"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt
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
      width: var(--testimonial-img-height) !important;
      height: var(--testimonial-img-height);
      border-radius: 50%;
      object-fit: cover;
    }
    .speech {
      height: calc(var(--testimonial-img-height) / 2);
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
    <Icon name="starFull" color="yellow" height="stars" />
    <Icon name="starFull" color="yellow" height="stars" />
    <Icon name="starFull" color="yellow" height="stars" />
    <Icon name="starHalf" color="yellow" height="stars" />
    <Icon name="starEmpty" color="yellow" height="stars" />
  </StarWrapper>
);

const StarWrapper = styled(SpaceWrapper)`
  display: flex;
  gap: var(--testimonial-stars-gap);
  justify-content: center;
`;
