import Link from "next/link";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import s from "./style.module.scss";
interface Person {
  children: ReactNode;
}

const Navlinck: FC<Person> = ({ children }) => {
  const [loading, setLoading] = useState(true);

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
