import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import styled from "styled-components";

const ParallaxImage = ({ image, speed = -10, objPosition = "top center" }) => {
  const parallax = useParallax({
    speed: speed,
  });
  return (
    <ParallaxImageStyle ref={parallax.ref}>
      <GatsbyImage
        image={getImage(image.localFile)}
        alt={image.alternativeText}
        className="background"
        imgStyle={{objectPosition: objPosition}}
      />
    </ParallaxImageStyle>
  );
};

export default ParallaxImage;

const ParallaxImageStyle = styled.div`
  position: absolute;
  z-index: -90;
  height: 100%;
  width: 100%;
  .background {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      z-index: -90;
      object-fit: cover;
    }
  }
`;
