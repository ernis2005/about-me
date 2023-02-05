import React, { FC } from "react";
import { cards } from "../types/types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";


import s from "./cards.module.scss";
interface Person {
  daa: cards[];
}
const Block_cards: FC<Person> = ({ daa }) => {
  return (
    <div>
      <div className={s.info}>Проекты</div>
      <Swiper
             effect={"coverflow"}
             grabCursor={true}
             centeredSlides={true}
             slidesPerView={"auto"}
             coverflowEffect={{
               rotate: 50,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
             }}
             pagination={true}
                className={s.mySwipe}
             modules={[EffectCoverflow, Pagination]}
      >
        {/* {daa.map((res) => (
          <SwiperSlide key={res.data.key}>
            
            <div>
              {res.data.emal2}
            </div>
          </SwiperSlide>
          
        ))} */}
  <SwiperSlide className={s.swiperslide}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}> 
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide className={s.swiperslide}>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Block_cards;
