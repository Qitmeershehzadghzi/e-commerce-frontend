import React from 'react'
import Title from '../../components/Title/Title'
import { assets } from '../../assets/frontend_assets/assets'
import NewsletterBox from '../../components/NewsLetter/NewsletterBox'
import './About.css'
function About() {
  return (
    <div className='div-1'>
     <div className='div-2'>
      <Title text1={'About'} text2={'US'}/>
      </div> 
      <div className='div-3'>
<img src={assets.about_img} className='about' alt="" />
<div className='div-4'>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut in dicta perferendis libero iure? Laborum eos ab quisquam! Dignissimos iure deserunt numquam ducimus veniam possimus placeat incidunt inventore ipsam.
</p>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto corrupti, quos molestias neque facere eius, accusantium saepe maiores itaque reprehenderit aliquam ea exercitationem! Corrupti atque ad porro deserunt dignissimos.
</p>
<b className='b-tagg'>OUR MISSION</b>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, inventore totam? Vero quis, laboriosam quod magnam quae aliquid laudantium maiores minima, totam corporis maxime harum earum, doloribus dolore unde aspernatur.</p>
</div>
      </div>
      <div className='div-5'>
<Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='div-6'>
<div className='div-7'>
<b>Quality Assurance :</b>
<p className='pppp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem eius autem repudiandae quibusdam sed fugiat tempore ex libero, aliquid incidunt possimus exercitationem perspiciatis quasi beatae necessitatibus ratione quaerat reiciendis.</p>
</div>
<div className='div-7'>
<b>Convience :</b>
<p className='pppp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem eius autem repudiandae quibusdam sed fugiat tempore ex libero, aliquid incidunt possimus exercitationem perspiciatis quasi beatae necessitatibus ratione quaerat reiciendis.</p>
</div>
<div className='div-7'>
<b>Exceptional Customer Service :</b>
<p className='pppp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem eius autem repudiandae quibusdam sed fugiat tempore ex libero, aliquid incidunt possimus exercitationem perspiciatis quasi beatae necessitatibus ratione quaerat reiciendis.</p>
</div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
