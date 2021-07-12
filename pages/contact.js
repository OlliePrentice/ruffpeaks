import Head from 'next/head'
import Header from "../components/structures/header"
import Footer from "../components/structures/footer"
import Layout from "../components/structures/layout"
import PageHeader from '../components/blocks/page-header'
import Form from '../components/blocks/form'

export default function Contact(props) {

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
            title="Contact"
            image="/pexels-marcin-jozwiak-2739505.jpg"
          
        />
        <Form captcha={props.captcha} />

      </Layout>
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
    const captcha = process.env.RECAPTCHA_SITE_KEY;
    return {
        props: {
            captcha,
        },
    }
}