import Head from 'next/head'
import Header from "../components/structures/header"
import Footer from "../components/structures/footer"
import Layout from "../components/structures/layout"
import PageHeader from '../components/blocks/page-header'
import Gallery from '../components/blocks/gallery'

export default function AllGallery() {
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
            title="Gallery"
            image="/pexels-marcin-jozwiak-2739505.jpg"
          
        />
        <Gallery />
      </Layout>
      <Footer/>
    </>
  )
}
