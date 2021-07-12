import Head from 'next/head'
import Header from "../components/structures/header"
import Footer from "../components/structures/footer"
import Layout from "../components/structures/layout"
import PageHeader from '../components/blocks/page-header'
import Accordion from '../components/blocks/accordion'
import BannerCta from '../components/blocks/banner-cta'

export default function FAQ() {

  const faqs = [
    {
      'heading': 'What times do you offer your service?',
      'copy': '<p>We walk our dogs Monday to Friday between 9.30am and 4.30pm, but <a href="/contact">get in touch</a> if you have a specific time required.</p>'
    },
    {
      'heading': 'Do you offer solo dog walks?',
      'copy': '<p>We offer both solo and group dog walks.</p>'
    },
    {
      'heading': 'Do you offer longer than 1 hour walks?',
      'copy': '<p>We are happy to do upon request.</p>'
    },
    {
      'heading': 'Are there any COVID-19 requirements?',
      'copy': '<p>We are following the government advice regarding COVID-19. We will not enter your home without wearing a mask for yours and your dogs safety.</p>'
    },
    {
      'heading': 'What is your weather policy?',
      'copy': '<p>We endevor to walk our dogs in all weather, however, if we deem the conditions to be unsafe we will not walk and notify you. This could be that the conditions are too hot or there is a severe storm. In this event we can provide activity for the dog in the home or cancel the appointment.</p>'
    },
  ]

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
            title="FAQs"
            image="/pexels-marcin-jozwiak-2739505.jpg"
          
        />
        <Accordion segments={faqs} />
        <BannerCta padding="" />
      </Layout>
      <Footer/>
    </>
  )
}
