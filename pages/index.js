import { readMd } from '../lib/docs'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Home({ docData }) {
  return (
    <Layout>
      <Head>
        <title>A Blockchain Course</title>
      </Head>

      <main>
        <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
      </main>
      <footer>
        Creative Commons 4.0 Attribution
      </footer>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const docData = await readMd('home.md')

  return {
    props: {
      docData
    }
  }
}
