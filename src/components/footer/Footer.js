import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Для плавного скролла
        });
      };

  return (
    <div className='footer'>
        <div className="wrapper">
            <div className="footer_logo" />
            <div className="footer_menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Forum</a></li>
                </ul>
            </div>
            <div className="social">
                <FaFacebookSquare className='social_icon'/>
                <FaInstagram className='social_icon'/>
                <FaTwitter className='social_icon'/>
            </div>
            <div className="phone_number">
                <p>+1 (702) 910 - 9163</p>
            </div>
            
            <div className="up_button" onClick={scrollToTop}/>
        </div>
    </div>
  )
}
