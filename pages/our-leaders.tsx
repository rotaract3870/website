import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const OurLeaders: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rotaract District 3870 | People of Action</title>
                <meta name="description" content="Rotaract District 3870" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                Rotaract District 3870
            </header>
            <main>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/our-leaders">Our Leaders</Link></li>
                    </ul>
                </nav>
                <h1>
                    Our Leaders
                </h1>
                <section>
                    <h2>John Doe</h2>
                    <p>District Rotaract Representative, RY 2022-23</p>
                    <p>Imagine Rotary</p>
                </section>
            </main>
        </div>
    )
}

export default OurLeaders
