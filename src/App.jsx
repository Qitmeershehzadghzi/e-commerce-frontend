import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import PlaceOrder from './Pages/PlaceOrder'
import Collection from './Pages/Collection/Collection'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <div className='Mian-file'>
      <Navbar />
      {/* yar sahi se design karo 
ke width aisa lage ke laptop me dekh rahe hen  width itni kam 
yar sahi se design karo */}
      <Routes>
<Route path='/' element={<Home />}/>
<Route path='/login' element={<Login />}/>
<Route path='/about' element={<About />}/>
<Route path='/collection' element={<Collection />}/>
<Route path='/contact' element={<Contact />}/>
<Route path='/product/:productId' element={<Product />}/>
<Route path='/cart' element={<Cart />}/>
<Route path='/place-order' element={<PlaceOrder />}/>
<Route path='/orders' element={<Orders />}/>
      </Routes>
      <Footer />
    </div>
  )
}
