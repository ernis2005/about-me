
import { motion } from 'framer-motion';
import React from 'react'
import s from '../components/css.module.css'
function AnimCursor() {
    const [mouse ,setMouse] =  React.useState({
        x:0,
        y:0,

    })
    console.log(mouse);
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
    const variants={
        default:{
            x:mouse.x-1,
            y:mouse.y,

        }
        
    }
    
    const variants2={
        default:{
            x:mouse.x-10,
            y:mouse.y-10,

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

      className={s.cursor}/>
           <motion.div 
      variants={variants2}
      animate="default"
      initial="initial"
      whileInView="animate"
      exit="initial"

      className={s.cursor2}/>
    </div>
  )
}

export default AnimCursor

// {`${styles.icon} ${styles.modalBack}`}>