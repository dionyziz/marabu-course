import Layout from '../../components/layout'
import { getAllDocIds, getDocData } from '../../lib/docs'
import Head from 'next/head'

export default function Doc({ docData }) {
  return (
    <Layout>
      <Head>
        <title>A Blockchain Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const docData = await getDocData(params.id)

  return {
    props: {
      docData
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
