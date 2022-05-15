import './../public/css/style.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
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
