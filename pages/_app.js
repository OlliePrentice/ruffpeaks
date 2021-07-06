import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import '../styles/App.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import registerIcons from '../lib/register-icons'
import Head from 'next/head'

registerIcons();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <link
            rel="preload"
            href="/fonts/Adventure.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Adventure.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
