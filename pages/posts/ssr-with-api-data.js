import Layout from "../../components/layout";
import Head from "next/head";
import { getCatFacts } from "../../lib/catFacts";

export async function getServerSideProps() {
    const facts = await getCatFacts();
    return {
        props: {
            facts: facts
        }
    }
}

export default function SecondPost({facts}) {
    const factsList = facts.map((fact) => {
        return <li>{fact}</li>;
    })
    return (
        <Layout>

        <Head>
          <title>SSR with API Data | Next.js</title>
        </Head>
  
        <h1>SSR with API Data</h1>
        <h3>SSRed page using <a href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props">getServerSideProps</a> after fetching data via API</h3>
        <ul>{factsList}</ul>
      </Layout>
    )
}