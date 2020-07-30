import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GabTech.ML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          WHOAMI? <a href="#">I am Gab!</a>
        </h1>

        <p className={styles.description}>
          A motivated programmer, developer, editor and many more!
        </p>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          GabTech.ML 2020
        </a>
      </footer>
    </div>
  )
}
