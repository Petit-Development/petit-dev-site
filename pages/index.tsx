import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title>Petit Development</title>
        </Head>
      <div className={styles.top}>
          <Image className={styles.logo} alt="Logo" width={512} height={137} src="/Whole Logo Dark.svg" />
          <div className={styles.description}>
            <h3> Petit Development, LLC provides
              <span className={styles.secondary}> Mobile & Web application development</span> for <span className={styles.secondary}> Small to Medium sized Businesses</span>. Petit.dev contributes to the Open Source Community in a variety of ecosystems such as Flutter, Node, Java, Golang and more.</h3>
          </div>
      </div>
      <main className={styles.main}>
        <div className={styles.video}>
          Gif/Video location
        </div>
        <div className={styles.info}>
          <p>
          Information About what is on this Tab
          </p>
        </div>
      </main>
      <footer className={styles.nav}>
        <div>
          YOUTUBE
        </div>
        <div>
          FREELANCE
        </div>
        <div>
          GITHUB
        </div>
      </footer>
    </div>
  )
}
