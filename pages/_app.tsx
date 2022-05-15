import './../public/css/style.css'
import './../public/css/animate.min.css'
import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if(typeof window !== 'undefined'){
      (window as any).WOW = require('wowjs');
      new (window as any).WOW.WOW().init();
    }
  });
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Rotaract District 3870 | People of Action</title>
        <meta name="description" content="Rotaract District 3870 | The Heart of Mindanao" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" type="image/ico" href="./favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
