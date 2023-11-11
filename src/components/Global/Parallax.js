import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Parallax = ({ children, strength = 200, fromBottom = true }) => {
  const containerRef = useRef(null);

  const calcPosition = (parallax, strength, fromBottom) => {
    const { y, height } = parallax.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const newPosition =
      ((windowHeight + height - (y + height)) / (windowHeight + height)) *
      height;
    const progressReal = Math.min(
      100,
      Math.max(0, (newPosition / height) * 100)
    );
    if (fromBottom) return -((strength * progressReal) / 100) + strength;
    return (strength * progressReal) / 100 ;
  };

  const updatePos = () => {
    containerRef.current.children[0].style.top =
      containerRef.current.children[0].style.transform = `translateY(${calcPosition(
        containerRef.current,
        strength,
        fromBottom
      )}px)`;
  };

  const handleScroll = () => {
    if (containerRef.current) {
      updatePos();
    }
  };

  useEffect(() => {
    updatePos();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParallaxStyle strenght={strength} ref={containerRef}>
      {children}
    </ParallaxStyle>
  );
};

export default Parallax;

const ParallaxStyle = styled.div.attrs((props) => ({
  style: {
    background: props.background,
  },
  pos: props.pos,
  strenght: props.strenght,
}))`
  position: absolute;
  background-color: salmon;
  z-index: -99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > * {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 0, 0.5);
    height: ${(props) => `calc(${props.strenght}px + 100%)`};
  }
`;
