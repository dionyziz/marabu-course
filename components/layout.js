import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import { Heading } from "@chakra-ui/react"
import birdPic from '../public/angry-bird-blue-icon.png'
import { HStack } from "@chakra-ui/react"

export default function Layout({ children }) {
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <div>
        <div>
          <img src={birdPic} alt='Blue Bird' width='50' height='50' />
        </div>

        <div>
          <Heading size='md'>Blockchain Foundations</Heading>
        </div>
      </div>

      <HStack spacing='1rem' mt='1rem'>
        <Link href='/'><a>Home</a></Link>
        <Link href='/docs/syllabus'><a>Syllabus</a></Link>
        <Link href='/docs/exercises'><a>Exercises</a></Link>
        <Link href='/docs/protocol'><a>Protocol</a></Link>
      </HStack>
    </header>

    <div className={styles.container}>
      <main>
        {children}
      </main>
    </div>

    <footer className={styles.container}>
      Creative Commons 4.0 Attribution
    </footer>
  </>
}
