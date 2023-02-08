import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { FC } from 'react'
import Navlinck from './Navlink/Navlinck'
interface Person{

}
export default function App({ Component, pageProps, }: AppProps) {
  return <Navlinck> <Component {...pageProps} /></Navlinck>
}
