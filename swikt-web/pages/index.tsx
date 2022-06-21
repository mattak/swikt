import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import Transpiler from "../components/Transpiler";

const Home: NextPage = () => {
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Swikt - swift to kotlin transpiler</title>
        <meta name="description" content="transpiler between swift and kotlin"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Swikt
        </h1>

        <p className={styles.description}>
          Swift to Kotlin transpiler
        </p>

        <Transpiler/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
