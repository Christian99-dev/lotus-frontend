import React, {useEffect} from "react";
import { useRef } from "react";
import styled from "styled-components";
import TextWithBackground from "../components/Global/TextWithBackground";
import SpaceWrapper from "../utils/SpaceWrapper";
import Button from "../components/Global/Button";
import bgimg from "../media/images/img1.png";
import bgfilter from "../media/images/grey.png";
import { Parallax } from "react-parallax";
import { useGlobalState } from "../utils/globalState";
import { offset } from "../utils/utils";

export default function Carousel({...props}) {
  const ref = useRef();
  const dispatch = useGlobalState()[1];
  
  /** Intersection Observer */
  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      _ => {
        dispatch({passedCarousel : window.scrollY > offset(cachedRef).top})
      },
      { threshold: 1 }
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref, dispatch]);

  return (
    <CarouselWrapper bgImage={bgimg} bgFilter={bgfilter} strength={500} {...props}>
      {/* id anchor */}
      <div id="carousel"/>
      <div className="filter"  ref={ref}>
        <TextWithBackground
          className="text1"
          text="Notfall? Rufen Sie uns Jetzt an!"
          fontSize="1"
          color="purple"
          spacing={{ top: "carousel-inner", bottom: "carousel-inner-2" }}
        />
        <TextWithBackground
          className="text2"
          text="01573 / 13485"
          fontSize="2"
          color="purple"
          spacing={{ bottom: "carousel-inner-3" }}
        />
        <SpaceWrapper
          className="buttons"
          spacing={{ bottom: "carousel-inner" }}
        >
          <Button text="Leistungen" color="purple" />
          <Button text="Über Uns" />
        </SpaceWrapper>
      </div>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled(Parallax)`
  .text1,
  .text2 {
    text-align: center;
  }

  .buttons {
    display: flex;
    gap: var(--carousel-gap);
    justify-content: center;
  }

  .filter {
    background: center / cover no-repeat url(${(props) => props.bgFilter});
  }
`;
