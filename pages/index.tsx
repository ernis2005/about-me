import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import { FC, useEffect, useState } from "react";
import Block_skills_cards from "./components/Block_skills_cards";

const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import Block_cards from "./block_cards/Block_cards";

const Home: FC<any> = ({ daa2 }) => {
  console.log(daa2);
  
  // const [first, setfirst] = useState<any[]>([daa2]);

  // useEffect(() => {
  //   setfirst(() => {
  //     return Object.keys(daa).map((key) => {
  //       return {
  //         ...daa[key],
  //         id: key,
  //       };
  //     });
  //   });
  // }, [daa]);

  return (
    <>
      <Head>
        <title>Ernis.com</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.header}>
        <div className={styles.block}>
          <div className={styles.info}>
            <p>Привет</p>
            <h2>
              Я Эрнис <br />
              Исманалиев
            </h2>
            <h5>
              Добро пожаловать Меня зовут Эрнис я фронтенд разработчик Здесь вы
              можете <br /> увидеть мои проекты
            </h5>
            <button>
              <a
                target="_blan"
                href="https://github.com/ernis2005?tab=repositories"
              >
                проекты
              </a>
            </button>
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.block2_block}>
            <Image
              src="/ernis2.png"
              className={styles.image}
              width={390}
              height={400}
              alt="/"
            />
            <div className={styles.block2_block2}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header2}>
        <div className={styles.block_skills}>
          <Block_skills_cards />
          <Block_cards data={daa2} />
        </div>
        <div className={styles.bloc_Projects}></div>
      </div>
      <div></div>
    </>
  );
};
export default Home;
export async function getStaticProps() {
  try {
    const res2 = await axios.get(
      "https://strapi-admin-ynr6.onrender.com/api/datas?populate=*"
    );
    let daa2 = res2.data.data;
    return {
      props: {
        daa2
      },
      revalidate: 20,
    };
  } catch (error) {
    return (
     <>
  <h1>ernis</h1>
     </>
    )
  }
}
