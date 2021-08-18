import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Petit Development</title>
        <meta name="description" content="Freelance Web and Mobile App Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <div>
            <Image alt="Logo" width={485} height={220} src="/Whole Logo Dark.svg" />
          </div>
          <h3>Freelance Development for Mobile and Web Applications</h3>
          <h2>
            <a className={styles.link} href="https://github.com/petit-development">Github</a>
          </h2>
          <h2>
            <a className={styles.link} href="mailto: joshua@petit.dev">Email</a>
          </h2>
          <h2>
            <a className={styles.link} href="https://www.youtube.com/channel/UClo6j1DhtvHIKBPcsmCgWlg/featured">Youtube</a>
          </h2>
        </main>
    </div>
  )
}
