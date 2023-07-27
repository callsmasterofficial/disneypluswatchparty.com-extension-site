import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Fask_ques from '../components/Fask_ques'
import Footer from '../components/Footer'
import Script from 'next/script'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'Bring back & relive Disney days with brats via Disney Watch Party ',
        description:
          'Now, you have Disney Watch Party that enables watching all your favorite Disney videos online from anywhere in real-time sync with live chat to bring amplification.     ',
        keywords:
          'Disney Plus Watch Party, Watch Party Disney Plus, How to do a Watch Party on Disney Plus, Disney Plus Party, Disney Watch Party, Disney Party, Watch Party on Disney Plus, How to Host a Disney Plus Watch Party, Disney Plus Group Watch',
        pageUrl: 'https://disneypluswatchparty.com/',
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />
      <Text2 />
      <Fask_ques />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
