import React from 'react'
const D = () => {
  return (
    <div>
    
    </div>
  )
}

export default D
export interface Portfoli{
  id:number;
iamg:any;
info:string;
a:string
}
export interface skills{
  info:string,
  icon:any,
  id:number,
  a:string,
}

// export interface cards{
//   data:  {
//     name:string,
//     git:string,
//     versol:string,
//     image2:string,
  
//   },
//   id: string
// }

export interface cardss{
  attributes:{
    img:any
    name:string;
    info:string;
    reactjs:string;
    git:string,
   versol:string,
  }

  id: number
}

