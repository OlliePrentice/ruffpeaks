import Head from 'next/head'
import Header from "../components/structures/header"
import Footer from "../components/structures/footer"
import Hero from '../components/blocks/hero'
import ContentImage from '../components/blocks/content-image'
import BannerCta from '../components/blocks/banner-cta'
import Services from '../components/blocks/services'
import BackgroundCta from '../components/blocks/background-cta'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruff Peaks | Dog Walking in Glossop</title>
        <meta name="description" content="Dog walking and dog services in Glossop and the Peaks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <Hero/>
        <ContentImage 
          image="/pexels-marcin-jozwiak-2739505.jpg"
          heading="Paws on Patrol!"
          copy="<p>We provide hour long walks for dogs around Glossop and the Peaks. This ensures our pooches have the vital exercise they need in a day and come home happy and relaxed.</p>"
          link={{url: '/', title: 'Enquire now'}}
          animation={true}
        />
         <ContentImage 
          image="/pexels-dariusz-grosa-2043021.jpg"
          heading="Come rain<br/> or shine"
          copy="<p>We don't shy away from a bit of bad weather. As long as the conditions aren't threating to health of our dogs we'll voyage out on our walks. We return our dogs dry and happy!</p>
          <p>For more information about our weather policy click the link below.</p>"
          link={{url: '/', title: 'Weather policy'}}
          reverse={true}
        />
        <BannerCta />
        <Services
          animation={true}
        />
        <BackgroundCta />
      </main>
      <Footer/>
    </>
  )
}
