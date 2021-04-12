import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./styles.css";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SideSlider({ title, children }) {
  return (
    <section id="side-slider">
      <h2>{title}</h2>
      <Swiper
        slidesPerView="auto"
        scrollbar={{ draggable: true, hide: true }}
        observer
        observeParents
      >
        {children?.length &&
          children.map((child, key) => (
            <SwiperSlide key={key}>{child}</SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default SideSlider;
