import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Head>
          <title>Petit Development</title>
        </Head>
        <Image className={styles.logo} alt="Logo" width={512} height={137} src="/Whole Logo Dark.svg" />
      </div>
      <div className={styles.description}>
      <h3> Petit Development, LLC provides
        <span className={styles.secondary}> Mobile & Web application development</span> for <span className={styles.secondary}> Small to Medium sized Businesses</span>. Petit.dev contributes to the Open Source Community in a variety of ecosystems such as Flutter, Node, Java, Golang and more.</h3>
      </div>
      <main className={styles.main}>
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
