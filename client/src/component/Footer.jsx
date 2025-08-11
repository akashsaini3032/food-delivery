

// const Footer=()=>{
//     return(
//         <>
//          <div id="copyright">
//             www.myshopping.com all right reserved. 2025  
//           </div>        
//         </>
//     )
// }

// export default Footer;

// Footer.jsx
import React from 'react';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import logo from "../Images/logo.png";

const Footer = () => {
  return (
    <footer className="optivit-footer">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <img src={logo} alt="Logo" className="footer-logo" />

          <p>
            The best food technology is now a reality. Special cooking and delivery technologies
            allow you to buy fresh and healthy food. Experienced chefs and professional couriers.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-column contact-column">
          <h3>Our Contacts</h3>
          <p>📱 1800 310 10 10<br />1800 310 10 18</p>
          <p>🏢 56 Data St, New York,<br />NY 10005, USA</p>
          <p>📧 test@example.com<br />site@example.com</p>
        </div>

        <div className="footer-column meals-column">
          <h3>Meals plan</h3>
          <ul>
            <li> Weight loss for anyone</li>
            <li> Weight gain for sportsman</li>
            <li> For men super diet</li>
            <li> For women daily nutrition</li>
            <li> Special menu for children</li>
          </ul>
        </div>

        <div className="footer-column subscribe-column">
          <h3>Subscribe</h3>
          <input type="email" placeholder="Your Email" className="email-input" />
          <button className="subscribe-btn">SUBSCRIBE</button>
          <p className="spam-text">
            We also do not like spam and will only send you useful information.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2021 All rights reserved. Developed at <a href="#">Clientica</a>, theme <a href="#">Optivit</a>.
        </p>
        <div className="footer-links">
          <a href="#">Privacy policy</a>
          <a href="#">Delivery terms</a>
          <a href="#">Help center</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
