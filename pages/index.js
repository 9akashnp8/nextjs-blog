import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home({facts}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>Welcome to Akash's Nextjs Blog, This blog is a learning bed for all things Nextjs </h3>
        <hr/>
        <ul>
          <li><Link href='/posts/ssg-with-api-data'>SSG Page with data from beloved Cat Facts API</Link></li>
          <li><Link href='/posts/ssr-with-api-data'>SSR Page with data from beloved Cat Facts API</Link></li>
          <li><Link href='/posts/csr-with-api-data'>CSR Page with data from beloved Cat Facts API using SWR</Link></li>
        </ul>
      </section>
    </Layout>
  )
}
