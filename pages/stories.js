import Head from 'next/head'
import Header from "../components/structures/header"
import Footer from "../components/structures/footer"
import Layout from "../components/structures/layout"
import PageHeader from '../components/blocks/page-header'
import PostLoop from '../components/blocks/post-loop'
import BannerCta from '../components/blocks/banner-cta'

export default function Stories() {
  return (
    <>
      <Head>
        <title>Ruff Peaks | Dog Walking in Glossop</title>
        <meta name="description" content="Dog walking and dog services in Glossop and the Peaks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Layout>
        <PageHeader 
            title="Stories"
            image="/pexels-marcin-jozwiak-2739505.jpg"
          
        />
        <PostLoop />
        <BannerCta padding="" />
      </Layout>
      <Footer/>
    </>
  )
}
