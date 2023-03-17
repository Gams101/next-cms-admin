import setupAxios from '@/setup/SetupAxios'
import '@/styles/globals.css'
import axios from 'axios'
import type { AppProps } from 'next/app'

setupAxios(axios)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
