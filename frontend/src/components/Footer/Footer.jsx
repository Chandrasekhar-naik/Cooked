import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, nostrum cupiditate quos error debitis voluptatibus accusantium, sit eaque quia alias exercitationem ea sed, dolore accusamus minima! Corrupti nisi saepe odio.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-333-4445</li>
                    <li>contact@cooked.com</li>
                </ul>
            </div>
            <hr/>
            
        </div>
        <p className="footer-copyright">Copyright 2025 Cooked.com All Right Reserved.</p>
    </div>
  )
}
