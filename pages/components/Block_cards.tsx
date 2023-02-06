import React, { FC, useEffect, useState } from "react";
import { cards } from "../types/types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import s from "./cards.module.scss";
import Image from "next/image";



interface Person {
  data: cards[];
}
const Block_cards: FC<Person> = ({ data }) => {

 
let [loading ,setloading ]=useState(true)
setTimeout(() => {
  setloading(()=>false)
}, 100);
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
        {
           loading ? (
            <>
           loading
            </>
           ):(
              data.map((res,) => (
          <SwiperSlide key={res.id} className={s.swiperslide}>
            <Image 
            alt="/"
            layout="fill"
            objectFit="cover"
            src={res.data.image2} />
            <div className={s.name}>
            <p >{res.data.emal}</p>
            </div>
            
          </SwiperSlide>
        ))
           )
        }
      
      </Swiper>
    </div>
  );
};

export default Block_cards;
