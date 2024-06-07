import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../assets/imgs/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="footer-address">
          <h4>Contact Us</h4>
          <p> Svetsarvägen 15, Stockholm, Solna Business Park</p>
          <p>Email: info@stockholmtab.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
