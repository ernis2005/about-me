
import { motion } from 'framer-motion';
import React from 'react'
import s from '../components/css.module.css'
function AnimCursor() {
    const [mouse ,setMouse] =  React.useState({
        x:0,
        y:0,
    })
    const [mouse2 ,setMouse2] =  React.useState({
        x:0,
        y:0,
    })
    React.useEffect(()=>{
        const mouseMove =e=>{
           setMouse({
            x:e.clientX,
            y:e.clientY
           })

        }
        window.addEventListener('mousemove', mouseMove);
        return ()=>{
            window.removeEventListener('mousemove',mouseMove)
        }
    }, [ ])
    React.useEffect(()=>{
        const mouseMove2 =e=>{
           setMouse2({
            x:e.clientX,
            y:e.clientY
           })

        }
        window.addEventListener('mousemove', mouseMove2);
        return ()=>{
            window.removeEventListener('mousemove',mouseMove2)
        }
    }, [ ])
    const variants={
        default:{
            x:mouse.x-1,
            y:mouse.y,
        }   
    }
    const variants2={
        default:{
            x:mouse2.x-10,
            y:mouse2.y-10,
        }
    }
  return (
    <div>
      <motion.div 
      variants={variants}
      animate="default"
      initial="initial"
      whileInView="animate"
      exit="initial"

      className={s.cursor}></motion.div>
           <motion.div 
      variants={variants2}
      animate="default"
      initial="initial"
      whileInView="animate"
      exit="initial"

      className={s.cursor2}></motion.div>
    </div>
  )
}

export default AnimCursor

// {`${styles.icon} ${styles.modalBack}`}>