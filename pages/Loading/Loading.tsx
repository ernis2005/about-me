import Image from "next/image";
import React, { FC } from "react";
import s from "../Loading/style.module.scss";
import { AiOutlineClose } from "react-icons/ai";

interface Person {
  onClick: () => void;
}
const Loading: FC<Person> = ({ onClick }) => {
  
  return (
    <div className={s.header}>
      <div className={s.block}>
        <Image src="/ernis.jpg" className={s.image} layout="fill" alt="/" />

        <div className={s.info}>
          <p>
            Добро пожаловать Меня зовут Эрнис я фронтенд разработчик 
            Здесь вы можете увидеть мои проекты
          </p>
        </div>
        <AiOutlineClose onClick={onClick} className={s.AiOutlineClose} />
      
      </div>
    </div>
  );
};

export default Loading;
