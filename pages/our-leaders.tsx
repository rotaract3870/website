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
                    <p>"Erm . . ." Harry thought hard. "No," he said finally. "I didn't need to use it before we got in the forest. And then I put my hand in my pocket, and all that was in there were my Omnioculars." He stared at Sirius. "Are you saying whoever conjured the Mark stole my wand in the Top Box?" "It's possible," said Sirius. "Winky didn't steal that wand!" Hermione insisted. "The elf wasn't the only one in that box," said Sirius, his brow furrowed as he continued to pace. "Who else was sitting behind you?" "Loads of people," said Harry. "Some Bulgarian ministers .. . Cornelius Fudge ... the Malfoys ..." "The Malfoys!" said Ron suddenly, so loudly that his voice echoed all around the cave, and Buckbeak tossed his head nervously. "I bet it was Lucius Malfoy!" "Anyone else?" said Sirius. "No one," said Harry. "Yes, there was, there was Ludo Bagman," Hermione reminded him. "Oh yeah . . ." "I don't know anything about Bagman except that he used to be Beater for the Wimbourne Wasps," said Sirius, still pacing. "What's he like?" "He's okay," said Harry. "He keeps offering to help me with the Triwizard Tournament."</p>
                </section>
            </main>
        </div>
    )
}

export default OurLeaders
