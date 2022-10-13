import useSWR from 'swr';
import Layout from '../../components/layout';
import Head from 'next/head';

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(data => data['fact'])

export default function ThirdPost() {
    const {data, error} = useSWR('https://catfact.ninja/fact', fetcher)

    return (
        <Layout>
            <Head>
                <title>CSR Page with API Data | Next.js</title>
            </Head>
            <h1>CSR using SWR with API Data</h1>
            <h3>Client side rendered page using <a href="https://swr.vercel.app/docs/getting-started">SWR</a></h3>
            {error ? <div>Failed to load div</div> : ''}
            {!data ? <div>Loading...</div> : <div>{data}</div>}
        </Layout>
    )
}