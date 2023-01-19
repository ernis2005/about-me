import Image from 'next/image';
import React ,{FC}from 'react'
import { Portfoli } from '../types/types'

export const Portfolio:FC = () => {
    const [data, ] = React.useState<Portfoli[]>([
        {iamg:'/2Pr.png',id:1,info:"ernnis",a:"https://shop-ernis.vercel.app/"}
    ])
    console.log(data);
    
  return (
    <div>
        {data.map((res)=>(
            <div key={res.id}>
 <Image
 src={res.iamg}

 width={350}
 height={250}
 alt="/"
/>
     
            </div>
   ))}
  
    </div>
  )
}
