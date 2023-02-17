import React, { FC, useEffect, useState } from "react";
import { cardss } from "../types/types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import s from "./cards.module.scss";
import Image from "next/image";

import Link from "next/link";
import { GrGithub } from "react-icons/gr";


interface Person {
  data: cardss[];
}
const Block_cards: FC<Person> = ({ data }) => {
  console.log(data);
  
  let [loading, setloading] = useState<boolean>(true);
  let [modal, setModal] = useState<any>(true);
  setTimeout(() => {
    setloading(() => false);
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
        {loading ? (
          <>
            <p>loading</p>
          </>
        ) : (
          data.map((res) => (
            <div key={res.id}>
            <SwiperSlide  className={s.swiperslide}>
                <Image
                alt="/"
                layout="fill"
                objectFit="cover"
                src={res.attributes.img.data[0].attributes.url}
              />   
              <div className={s.name} >
                <p>{res.attributes.name}</p> 
                <div className={s.info_name}>
                 
                  <Link className={s.Link} href={`../modal/${res.id}`} >
                                            подробнее
                                        </Link>
                  <a  href={res.attributes.versol} target="_blan">ссылка на проект</a>
                </div>
              </div>
            </SwiperSlide>
            </div>
          ))
        )}
      </Swiper>
   
               
    </div>
  );
};

export default Block_cards;
