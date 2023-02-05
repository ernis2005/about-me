import React, { FC, useState } from "react";
import { DiReact ,DiJqueryLogo} from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { SiRedux, SiTypescript,SiStrapi ,SiMaterialui,SiTailwindcss} from "react-icons/si";
import { TbBrandJavascript, TbBrandReactNative,TbBrandFramer,TbBrandNextjs } from "react-icons/tb";

import { skills } from "../types/types";
import { motion,  } from "framer-motion"
import style from "../components/styles.module.scss";
import axios from "axios";
 

const Block_skills_cards = () => {
  


    const left = {
        initial: {
          opacity: 0,
          x: -100
        },
        animate: {
          opacity: 1,
          transition: {
            duration: 1
          },
          x: 0
        },
    
      }
  const [data] = useState<skills[]>([
    {
      info: "Javascript",
      id: 1,
      icon: <TbBrandJavascript />,
      a: "https://learn.javascript.ru/",
    },
    {
        info: "Nextjs",
        id: 222222,
        icon: <TbBrandNextjs />,
        a: "https://nextjs.org/",
      },
    {
      info: "react",
      id: 2,
      icon: <DiReact />,
      a: "https://ru.react.js.org/",
    },
    {
      info: "ReactNative ",
      id: 3,
      icon: <TbBrandReactNative />,
      a: "https://reactnative.dev/",
    },
    {
      info: "redux-toolkit",
      id: 4,
      icon: <SiRedux />,
      a:" https://reactdev.ru/libs/redux-toolkit/",
    },
    {
      info: "Typescript",
      id: 5,
      icon: <SiTypescript />,
      a: "https://www.typescriptlang.org/",
    },
    {
        info: "sass-scss",
        id: 6,
        icon: <FaSass />,
        a: "https://sass-scss.ru/guide/",
      },
      {
        info: "Strapi",
        id: 7,
        icon: <SiStrapi />,
        a: "https://strapi.io/",
      },
      {
        info: "framer-motion",
        id: 8,
        icon: <TbBrandFramer />,
        a: "https://www.framer.com/motion/",
      },
      {
        info: "Jquery",
        id: 9,
        icon: <DiJqueryLogo />,
        a: "https://jquery.com/",
      },
      {
        info: "Materialui",
        id: 10,
        icon: <  SiMaterialui />,
        a: "https://mui.com",
      },
      {
        info: "Tailwindcss",
        id: 11,
        icon: <  SiTailwindcss />,
        a: "https://tailwindui.com/templates?ref=sidebar",
      },
      
    
  ]);
  return (
    <>
   <h3 className={style.skills}>Навыки</h3>
<div className={style.Block_skills_cards}>
     
     {data.map((res) => (
       <motion.div initial="initial"
       whileInView="animate"
       exit="initial"

       variants={left} key={res.id}>
         <a target="_blan" href={res.a}>
           <samp>{res.icon}</samp>
           <p>{res.info}</p>
         </a>
       </motion.div>
     ))}
     
   </div>
    </>
  );
};

export default Block_skills_cards;

