import { Link } from 'react-router-dom'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <h2>30<sup>°</sup> DEGREE</h2>
            <p className="brand-subtitle">Restaurant & Bar</p>
            <p className="brand-description">
              Experience the perfect blend of exquisite cuisine and warm hospitality. 
              Where every dish tells a story and every moment creates memories.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/book">Book Table</Link></li>
            <li><Link to="/menu">Menu Card</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Near Holkar Stadium<br />Indore, MP, India</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+91 1234567898</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>info@30degree.com</span>
            </div>
            <div className="contact-item">
              <FaClock />
              <span>Mon-Sun: 11:00 AM - 11:00 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/Rohitsng47" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/sng_rohit" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/rohit-kumar-07412a246/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube />
            </a>
          </div>
          <div className="founder-info">
            <h4>Co-Founder</h4>
            <p>Rohit Singh</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 30° Degree Restaurant. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer