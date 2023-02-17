import React from 'react'
import axios from "axios";
const modal = () => {
  return (
    <div>
       helo 
    </div>
  )
}

export default modal

export async function getStaticPaths() {
    const res = await axios.get(
      "https://strapi-admin-ynr6.onrender.com/api/datas?populate=*"
    );
    let paths = res.data.data.map((res) => {
      return {
        params: { id: String(res.id) },
      };
    });
    return {
      paths,
      fallback: false,
    };
  }
  export async function getStaticProps({ params: { id } }) {
    // const res2 = await axios.get(
    //   "https://stupendous-string-production.up.railway.app/api/adidasq?populate=*"
    // );
    // let data2 = res2.data.data;
  
    const res = await axios.get(
      `https://strapi-admin-ynr6.onrender.com/api/datas/${id}?populate=*`
    );
    let data = res.data.data;
    return {
      props: {
        // data2,
        data,
      },
      revalidate: 2,
    };
  }
  