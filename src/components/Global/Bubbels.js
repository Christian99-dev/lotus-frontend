import AnimationSvg from "./AnimationSvg";
import { Parallax } from "react-parallax";
import React from "react";

const Bubbels = () => {
  const AllBubbels = (percentage) => (
    <>
      <AnimationSvg
        svg="circle"
        shiftY={percentage}
        shiftStrenghtY={10}
        size={200}
        top="55%"
        left="8%"
      />
      <AnimationSvg
        svg="circle"
        shiftY={percentage}
        shiftStrenghtY={20}
        size={70}
        top="75%"
        left="8%"
      />
      <AnimationSvg
        svg="circle"
        shiftY={percentage}
        shiftStrenghtY={10}
        size={100}
        top="20%"
        left="57%"
        front
      />
      <AnimationSvg
        svg="circle"
        shiftY={percentage}
        shiftStrenghtY={30}
        size={50}
        top="20%"
        left="60%"
      />
      <AnimationSvg
        svg="circle"
        shiftY={percentage}
        shiftStrenghtY={10}
        top="5%"
        left="90%"
      />
    </>
  );
  return (
    <Parallax
      style={{ position: "static" }}
      renderLayer={(percentage) => AllBubbels(percentage - 0.5)}
      strength={200}
    />
  );
}

export default Bubbels;
