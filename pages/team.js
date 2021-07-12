import Head from 'next/head'
import Header from "../components/structures/header"
import Footer from "../components/structures/footer"
import Layout from "../components/structures/layout"
import PageHeader from '../components/blocks/page-header'
import ContentImage from '../components/blocks/content-image'
import BackgroundCta from '../components/blocks/background-cta'

export default function Team() {
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
            title="Team"
            image="/pexels-marcin-jozwiak-2739505.jpg"
          
        />
        <ContentImage 
          image="/pexels-marcin-jozwiak-2739505.jpg"
          heading="Amber"
          copy="<p>Amber has loved and owned dogs for most of her life, loves the outdoors and seeing the joy of dogs when in a happy environment.</p>
          <p>Amber's favourite breed is the Border Collie.</p>"
          link={{url: '/', title: 'Book Amber'}}
          animation={true}
        />
         <ContentImage 
          image="/pexels-dariusz-grosa-2043021.jpg"
          heading="Ollie"
          copy="<p>Ollie has grown up with dogs including Spaniels and many breeds of terrier and understands the complex behaviours each dog can have.</p>
          <p>Ollie's favourite breed of dog is the Jack Russell Terrier.</p>"
          link={{url: '/', title: 'Book Ollie'}}
          reverse={true}
        />
        <BackgroundCta />
      </Layout>
      <Footer/>
    </>
  )
}
