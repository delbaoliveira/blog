import Container from "../components/Container"
import PostList from "../components/PostList"
import Layout from "../components/Layout"
import { getAllPosts } from "../lib/api"
import Head from "next/head"

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>Delba de Oliveira</title>
      </Head>
      <Layout>
        <Container>
          {allPosts.length > 0 && <PostList posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  return {
    props: { allPosts },
  }
}
