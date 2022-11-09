import React from "react";
import Circle from "../../media/illu/circle.svg";
import Rectangle from "../../media/illu/rectangle.svg";

const AnimationSvg = ({
  size = 100,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  front,
  shiftY = 0,
  shiftStrenghtY = 0
}) => {
  let zIndex = front ? 99 : -99;

  let src = Circle;
  return (
    <img
      src={src}
      style={{
        position: `absolute`,
        height: size,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        zIndex: zIndex,
        transform: `translateY(${shiftY * shiftStrenghtY + "vh"})`,
      }}
    />
  );
};

export default AnimationSvg;
