import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>{children}</div>
  </>
}
