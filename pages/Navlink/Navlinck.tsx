import Link from "next/link";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import Loading from "../Loading/Loading";
import s from "./style.module.scss";


import { ImTelegram } from "react-icons/im";

import { GrGithub } from "react-icons/gr";
  import AnimCursor from "../components/AnimCursor";
interface Person {
  children: ReactNode;
}


const Navlinck: FC<Person> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  let LoadingFa = () => {
    setLoading(false);
  };
  return (
    <div>
     
       <AnimCursor/> 
      {loading ? (
        <div>
          <Loading onClick={LoadingFa} />
        </div>
      ) : (
        <header className={s.header}>
       <div ></div>
         <div className={s.menu}>
            <div className={s.block_menu}>
              <h1>Ernis.com</h1>
            </div>
            <div className={s.lincks}>
        
            <a className={s.GrGithub} href="https://github.com/ernis2005"target="_blan"><GrGithub/></a>
            <a className={s.GrGithu} href="https://t.me/Ernis00"target="_blan"><ImTelegram/></a>
         
              <Link className={s.linck} href="#">
            
                Проекты
              </Link>
              <Link className={s.linck} href={'../anbut'}>
                О нас
              </Link>
            </div>
          </div>
          <div>{children}</div>
           
        </header>
      )}
    </div>
  );
};

export default Navlinck;
