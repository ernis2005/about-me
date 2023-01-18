import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navlinck from './Navlinck/Navlinck'
import { FC } from 'react'
interface Person{

}
export default function App({ Component, pageProps, }: AppProps) {
  return <Navlinck> <Component {...pageProps} /></Navlinck>
}
