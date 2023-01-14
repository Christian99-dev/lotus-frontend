import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Global/Icon";
import Titel from "./Global/Titel";
import speech from "../media/icons/speech.svg";
import SpaceWrapper from "../utils/SpaceWrapper";
import MySwiper from "./Global/MySwiper";
import TextWithBackground from "./Global/TextWithBackground";
import useWindowDimensions from "../utils/useWindowDimensions";
import { size } from "../theme/breakpoints";
import Loader from "./Global/Loader";
import { createImgUrl } from "../utils/utils";

export default function Testimonial({ fetchData }) {
  const comments = [<Comment />, <Comment />, <Comment />];

  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
    });
  }, []);

  const windowDim = useWindowDimensions().width;
  return (
    <TestimonialWrapper
      id="testimonial"
      spacing={{
        top: "white-component-inner-half",
        bottom: "white-component-inner",
      }}
    >
      {data ? (
        <Titel
          text="Das sagen unsere Kunden"
          color="purple"
          spacing={{
            bottom: "white-component-inner-half",
            left: "border",
            right: "border",
          }}
          center
        />
      ) : (
        <Loader
          title
          spacing={{
            bottom: "white-component-inner-half",
            left: "border",
            right: "border",
          }}
          color="primary"
        />
      )}
      {data ? (
        <MySwiper
          array={data.rezensionen.map((comment) => {
            return (
              <Comment
                text={comment.text}
                img={createImgUrl(comment.bild.data.attributes.url)}
                name={comment.vorname + " " + comment.nachname}
                rating={comment.bewertung}
              />
            );
          })}
          cards={windowDim <= size.tablet}
        />
      ) : (
        <Loader dots />
      )}
    </TestimonialWrapper>
  );
}

const TestimonialWrapper = styled(SpaceWrapper)`
  .loader {
    margin: 0 auto;
  }
`;

const Comment = ({ name, rating, img, text }) => (
  <CommentWrapper>
    <div className="img-container">
      <img className="img" src={img} alt="img" />
      <img className="speech" src={speech} alt="speech" />
    </div>
    <TextWithBackground text={name} fontSize={3} />
    <Stars
      spacing={{
        top: "testimonial-stars-inner",
        bottom: "testimonial-stars-inner",
      }}
      rating={rating}
    />
    <SpaceWrapper
      spacing={{ bottom: "testimonial-text-bottom" }}
      className="text"
    >
      {text}
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

const Stars = ({ rating, spacing }) => {
  const parseRating = (rating) => {
    let numOfFull = Math.floor(rating);
    let hasHalf = !Number.isInteger(rating);
    let nummOfEmpty = hasHalf ? 4 - Math.floor(rating) : 5 - Math.floor(rating);
    let out = [];

    for (let i = 0; i < numOfFull; i++)
      out.push(<Icon name="starFull" color="yellow" height="stars" key={i} />);

    if (hasHalf)
      out.push(<Icon name="starHalf" color="yellow" height="stars" key={10 + 5} />);

    for (let i = 0; i < nummOfEmpty; i++)
      out.push(<Icon name="starEmpty" color="yellow" height="stars" key={i + 5} />);

    return out;
  };

  parseRating(rating);
  return <StarWrapper spacing={spacing}>{parseRating(rating)}</StarWrapper>;
};

const StarWrapper = styled(SpaceWrapper)`
  display: flex;
  gap: var(--testimonial-stars-gap);
  justify-content: center;
`;
