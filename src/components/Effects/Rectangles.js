import AnimationSvg from "./AnimationSvg";
import { Parallax } from "react-parallax";
import React from "react";

const Rectangles = () => {
  const AllRectangles = (percentage) => (
    <>
      <AnimationSvg
        svg="rectangle"
        shiftY={percentage}
        shiftStrenghtY={10}
        size={200}
        top="0%"
        left="8%"
        rotation={percentage}
        rotationStrenght={20}
      />
      <AnimationSvg
        svg="rectangle"
        shiftY={percentage}
        shiftStrenghtY={20}
        size={70}
        top="75%"
        left="8%"
        rotation={percentage}
        rotationStrenght={60}
      />
      <AnimationSvg
        svg="rectangle"
        shiftY={percentage}
        shiftStrenghtY={20}
        size={100}
        top="20%"
        left="60%"
        rotation={percentage}
        rotationStrenght={60}
      />
            <AnimationSvg
        svg="rectangle"
        shiftY={percentage}
        shiftStrenghtY={40}
        size={100}
        top="20%"
        left="50%"
        rotation={percentage}
        rotationStrenght={-200}
      />
    </>
  );
  return (
    <Parallax
      style={{ position: "static" }}
      renderLayer={(percentage) => AllRectangles(percentage - 0.5)}
      strength={200}
    />
  );
};

export default Rectangles;
