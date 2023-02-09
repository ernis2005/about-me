import Link from "next/link";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import s from "./style.module.scss";

import { GrGithub } from "react-icons/gr";
interface Person {
  children: ReactNode;
}

const Navlinck: FC<Person> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  let LoadingFa = () => {
    setLoading(false);
  };
  return (
    <div>
      {loading ? (
        <div>
          <Loading onClick={LoadingFa} />
        </div>
      ) : (
        <header className={s.header}>
          <div className={s.menu}>
            <div className={s.block_menu}>
              <h1>Ernis.com</h1>
            </div>
            <div className={s.lincks}>
        
            <a className={s.GrGithub} href="https://github.com/ernis2005"   target="_blan"><GrGithub/></a>
         
              <Link className={s.linck} href="#">
                Проекты
              </Link>
              <Link className={s.linck} href="#">
                О нас
              </Link>
            </div>
          </div>
          <div>{children}</div>
          <div>er</div>
        </header>
      )}
    </div>
  );
};

export default Navlinck;