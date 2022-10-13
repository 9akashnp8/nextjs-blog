import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getCatFacts } from '../../lib/catFacts'

export async function getStaticProps(context) {
  const catFacts = await getCatFacts();
  return {
    props: {
      facts: catFacts
    }
  }
}

export default function FirstPost({facts}) {

  const factsList = facts.map((fact) => {
    return <li key={fact}>{fact}</li>
  })

  return (
    <Layout>

      <Head>
        <title>SSG with API Data | Next.js</title>
      </Head>

      <h1>SSG with API Data</h1>
      <h3>Pre-rendered page using <a href="https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops">getStaticProps</a> after fetching data via API</h3>
      <ul>{factsList}</ul>
      <p>Note: It won't be very different from SSR in development, as in development it runs for every request. In production, it only runs once in build stage.</p>
    </Layout>
  )
}
