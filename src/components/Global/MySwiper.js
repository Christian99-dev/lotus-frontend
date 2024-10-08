import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MySwiper({ array, cards }) {
  if (cards)
    return (
      <MySwiperWrapper
        autoHeight={true}
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
      >
        {array.map((slide, key) => (
          <SwiperSlide key={key}>{slide}</SwiperSlide>
        ))}
        <div className="pagination-bar"/>
      </MySwiperWrapper>
    );

  return (
    <MySwiperWrapper
      autoHeight={true}
      modules={[Pagination, Navigation]}
      navigation={{ clickable: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      loop={true}
      slidesPerView={1}
    >
      {array.map((slide, key) => (
        <SwiperSlide key={key}>{slide}</SwiperSlide>
      ))}
    </MySwiperWrapper>
  );
}

const MySwiperWrapper = styled(Swiper)`
  .swiper-slide {
    justify-content: center;
    display: flex;
  }
  .swiper-pagination {
    /* bottom: 0 !important; */
    .swiper-pagination-bullet {
      background-color: var(--primary);
      height: var(--slider-pagination-bullet-height);
      width: var(--slider-pagination-bullet-height);
    }
  }
  .swiper-button-next , .swiper-button-prev {
    color: var(--primary);
  }

  .swiper-button-next {
    right: var(--border);
  }

  .swiper-button-prev {
    left: var(--border);
  }

  .swiper-button-prev {
    
  }

  .pagination-bar{
    height: var(--slider-pagination-height);
  }
`;
