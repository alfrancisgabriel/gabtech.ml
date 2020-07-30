import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GabTech.ML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* start nav */}
      <div className={styles.nav}>
        <Link href="/"><a className={styles.navLink}>Home</a></Link>
        <Link href="/about"><a className={styles.navLink}>About</a></Link>
        <Link href="/contact"><a className={styles.navLink}>Contact</a></Link>
        <Link href="/blog"><a className={styles.navLink}>Blog</a></Link>
        <Link href="/projects"><a className={styles.navLink}>Projects</a></Link>
      </div>
      {/* end nav */}
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
