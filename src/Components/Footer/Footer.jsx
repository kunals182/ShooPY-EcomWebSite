import React from 'react'
import './footer.css'
import footer_logo from '../assets/logo.png'
import insta_logo from '../assets/instagram_icon.png'
import pintester from '../assets/pintester_icon.png'
import whatsApp from '../assets/whatsApp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="" />
        <p>ShooPY</p>

      </div>
      <ul>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={insta_logo} alt="" />

        </div>
        <div className="footer-icon-container">
          <img src={pintester} alt="" />

        </div>
        <div className="footer-icon-container">
          <img src={whatsApp} alt="" />

        </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p> Copyright @2025 All right Reserved</p>

        </div>


  

    </div>
  )
}

export default Footer