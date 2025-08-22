import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/frontend_assets/assets';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
<img src={assets.logo} className='logo' alt="" />
<p className='paraGraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex provident dicta odio culpa dolor distinctio quidem dolorum ad assumenda iusto nobis soluta vitae eos ipsa, iure commodi fugit placeat exercitationem.</p>
      </div>
      <div className='div'>

 
      <p className='ft-p'>
COMPANY
      </p>
      <ul className='ul'>
<li>Home</li>
<li>About US</li>
<li>Delivery</li>
<li>Privacy Policy</li>
      </ul>
      
           </div>
           <div className='div-1'>
    <p className='ft'>GET IN TOUCH</p>
    <ul className='ul-1'>
        <li>
+92 3053158512
        </li>
        <li>qitmeershehzad1@gmail.com</li>
    </ul>
           </div>
           <div>
            <hr />
            <p className='pr6'>
© 2023 All rights reserved | This template is made with ❤️ by  Qitmeer Shehzad
            </p>
           </div>
    </div>
  )
}

export default Footer
