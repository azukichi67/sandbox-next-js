import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import Head from "next/head";

export default function Post({ postData }) {
    const { title, date } = postData;
    // dangerouslySetInnerHTML : htmlの文字列をレンダリングできるが、XSSの脆弱性を生むので使い方は要注意 (dangerously とついているのはこのため)
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    );
}

// 動的ルーティング用の関数
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

// SSR 用の関数：ビルド時に呼び出され、取得した値を元にレンダリングを行う (開発時はリクエストの度に実行される)
export async function getStaticProps({ params }) {
    const { id } = params;
    const postData = await getPostData(id);
    return {
        props: {
            postData,
        },
    };
}
