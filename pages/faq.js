import Head from 'next/head'
import Header from "../components/structures/header"
import Footer from "../components/structures/footer"
import PageHeader from '../components/blocks/page-header'
import Accordion from '../components/blocks/accordion'
import BannerCta from '../components/blocks/banner-cta'

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Ruff Peaks | Dog Walking in Glossop</title>
        <meta name="description" content="Dog walking and dog services in Glossop and the Peaks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <PageHeader 
            title="FAQs"
            image="/pexels-marcin-jozwiak-2739505.jpg"
          
        />
        <Accordion />
        <BannerCta padding="" />
      </main>
      <Footer/>
    </>
  )
}
