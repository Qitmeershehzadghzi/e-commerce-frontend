import React from 'react'
import Hero from '../components/Hero/Hero'
import ShopCollection from '../components/ShopCollection/ShopCollection'
import BestSeller from '../components/BestSeller/BestSeller'
import OurPolicy from '../components/OurPolicy/OurPolicy'
import NewsletterBox from '../components/NewsLetter/NewsletterBox'

function Home() {
  return (
    <div>
            <Hero />
            <ShopCollection />
            <BestSeller />
            <OurPolicy />
            <NewsletterBox />

    </div>
  )
}

export default Home
