import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import styled from "styled-components";

const ParallaxImage = ({
  image,
  speed = -10,
  objPosition = "top center",
  zIndex = -90,
}) => {
  const parallax = useParallax({
    speed: speed,
  });
  return (
    <ParallaxImageStyle ref={parallax.ref} style={{ zIndex: zIndex }}>
      <GatsbyImage
        image={getImage(image.localFile)}
        alt={image.alternativeText}
        className="background"
        imgStyle={{ objectPosition: objPosition, zIndex: zIndex }}
      />
    </ParallaxImageStyle>
  );
};

export default ParallaxImage;

const ParallaxImageStyle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  .background {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
