import React from 'react';
import image1 from '../../assets/logo.png'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-contact">
          <div className="footer-logo">
            <img src={image1} style={{height:'45px',marginTop:'10px'}} />
          </div>
          <p><i className="fas fa-map-marker-alt"></i> 221 B Santa Monica, UAE Dubai</p>
          <p><i className="fas fa-phone"></i> (+1) 923 2341 22</p>
          <p><i className="fas fa-envelope"></i> contact@Travel.com</p>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="#">How to Book</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Flight</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Train</a></li>
            <li><a href="#">Bus</a></li>
            <li><a href="#">Car Rental</a></li>
            <li><a href="#">Guide</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Code of Conduct</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Travel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
