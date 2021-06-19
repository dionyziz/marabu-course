import { readMd } from '../lib/docs'
import Head from 'next/head'
import Layout from '../components/layout'
import Markdown from '../components/markdown'

export default function Home({ source }) {
  return (
    <Layout>
      <Head>
        <title>A Blockchain Course</title>
      </Head>

      <Markdown source={source} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const { mdxSource } = await readMd('home.md')

  return {
    props: {
      source: mdxSource
    }
  }
}
