import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MySwiper({ array }) {
  return (
    <MySwiperWrapper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={{ clickable: true }}
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
  .swiper-pagination {
    bottom: 0 !important;
    .swiper-pagination-bullet {
      background-color: var(--primary);
      height: 10px;
      width: 10px;
    }
  }
  .swiper-button-next {
    right: var(--border);
    color: var(--primary);
  }
  .swiper-button-prev {
    left: var(--border);
    color: var(--primary);
  }
`;
