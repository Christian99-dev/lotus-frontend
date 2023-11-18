import React from "react";

const AnimationSvg = ({
  svg = "circle",
  size = 100,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  front,
  shiftY = 0,
  shiftStrenghtY = 0,
  rotation = 0,
  rotationStrenght = 0,
}) => {
  let zIndex = 0;

  let src;
  if (svg === "circle") src = "illu/circle.svg";
  if (svg === "rectangle") src = "illu/rectangle.svg";
  return (
    <img
      src={src}
      alt="illu"
      style={{
        position: `absolute`,
        height: size,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        zIndex: zIndex,
        transform: `translateY(${shiftY * shiftStrenghtY + "vh"}) rotate(${rotation * rotationStrenght}deg)`,
      }}
    />
  );
};

export default AnimationSvg;
