import Layout from '../../components/layout'
import { getAllDocIds, getDocData } from '../../lib/docs'
import Head from 'next/head'
import Markdown from '../../components/markdown'

export default function Doc({ source }) {
  return (
    <Layout>
      <Head>
        <title>A Blockchain Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Markdown source={source} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { mdxSource } = await getDocData(params.id)

  return {
    props: {
      source: mdxSource
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllDocIds()

  return {
    paths,
    fallback: false
  }
}
