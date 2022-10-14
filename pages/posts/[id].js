import Layout from "../../components/layout";

import { getAllPostIds, getPostData } from "../../lib/catFacts";

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(params) {
    const postData = await getPostData(params.params.id);
    return {
        props: {
            data: postData,
        },
    }
}
export default function Post({data}) {
    return (
        <Layout>
            {data.title}
            <br/>
            {data.description}
        </Layout>
    )
}