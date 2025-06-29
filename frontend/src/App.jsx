import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder'
import { Footer } from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify.jsx'
import MyOrder from './pages/MyOrders/MyOrder.jsx'

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Order" element={<PlaceOrder/>}/>
          <Route path="verify" element={<Verify/>}/>
          <Route path="/myorders" element={<MyOrder/>}/>
        
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App