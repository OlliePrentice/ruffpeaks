import Head from 'next/head'
import Header from "../components/structures/header"
import Footer from "../components/structures/footer"
import PageHeader from '../components/blocks/page-header'
import Services from '../components/blocks/services'

export default function AllServices() {
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
            title="Services"
            image="/pexels-johann-2002056.jpg"
          
        />
        <Services
          animation={true}
        />
      </main>
      <Footer/>
    </>
  )
}
