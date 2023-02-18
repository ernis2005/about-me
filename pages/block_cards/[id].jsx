import React from "react";
import axios from "axios";

import Link from "next/link";
import s from "./modal.module.scss";
import Image from "next/image";
import { GrGithub } from "react-icons/gr";
import Block_cards from ".";
const Data = ({ data ,data2}) => {
  return (
    <div className={s.header}>
      <Link href="/">назать</Link>
      <div className={s.content}>
        <div className={s.block}>
          <div className={s.image}>
            <Image
              className={s.image}
              alt="/"
              layout="fill"
              objectFit="contain"
              src={data.attributes.img.data[0].attributes.url}
            />
          </div>
          <div className={s.info}>
            <h2> {data.attributes.name}</h2>
            <h3>
              Написина на {data.attributes.reactjs}
            </h3>
            <p> {data.attributes.info}</p>
            <div>
              <a href={data.attributes.git} target="_blan"><GrGithub/></a>
              <a href={data.attributes.versol} target="_blan">ссылка на проект</a>
            </div>
          </div>
        </div>
        <div>
        {/* <Block_cards className={s.Block_cards} data={data2} /> */}
        </div>
      </div>
    </div>
  );
};
export default Data;
export async function getStaticPaths() {
  const res = await axios.get(
    "https://strapi-admin-ynr6.onrender.com/api/datas?populate=*"
  );
  let paths = res.data.data.map((res) => {
    return {
      params: { id: String(res.id) },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }) {
  const res2 = await axios.get(
    "https://strapi-admin-ynr6.onrender.com/api/datas?populate=*"
  );
  let data2 = res2.data.data;
  const res = await axios.get(
    `https://strapi-admin-ynr6.onrender.com/api/datas/${id}?populate=*`
  );
  let data = res.data.data;
  return {
    props: {
       data2,
      data,
    },
    revalidate: 2,
  };
}
