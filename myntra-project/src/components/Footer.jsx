import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
    
    <footer>
        <div className="footer_container">
            <div className="footer_column">
                <h3>ONLINE SHOPPING</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
            </div>

            <div className="footer_column">
                <h3>CUSTOMER POLICIES</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
            </div>

            <div className="footer_column">
                <h3>USEFUL LINKS</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
            </div>
        </div>
        
        <div className='social-media'>
        <FaFacebook /> <FaTwitter /> <FaYoutube /> <FaSquareInstagram />
        </div>

        <div className="copyright">
            © 2025 www.myntra.com. All rights reserved.
        </div>
    </footer>

    </>
  )
}
