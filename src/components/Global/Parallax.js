import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Parallax = ({ children, strength = 400, fromBottom = false, className }) => {
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
    if (fromBottom) return -((strength * progressReal) / 100);
    return (strength * progressReal) / 100 - strength;
  };

  const updatePos = useCallback(() => {
    containerRef.current.children[0].style.transform = `translateY(${calcPosition(
      containerRef.current,
      strength,
      fromBottom
    )}px)`;
  }, [containerRef, strength, fromBottom]);

  useEffect(() => {
    updatePos();
    window.addEventListener("scroll", updatePos);
    return () => {
      window.removeEventListener("scroll", updatePos);
    };
  }, [updatePos]);

  return (
    <ParallaxStyle className={className} strength={strength} ref={containerRef}>
      {children}
    </ParallaxStyle>
  );
};

export default Parallax;

const ParallaxStyle = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > * {
    height: ${(props) => `calc(${props.strength}px + 100%)`};
    width: 100%;
  }
`;
