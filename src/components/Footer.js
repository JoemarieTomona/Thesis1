import React from "react";
import { Container } from "react-bootstrap";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <p>© 2025 StealthScan. Secure Your Files with Privacy-Preserving Malware Detection.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> |
          <Link to="/terms-of-use">Terms of Use</Link> |
          <Link to="/about-us">About Us</Link> |
          <Link to="/contact-us">Contact Us</Link>
        </p>
        <div className="mt-2">
          <a href="#"><FaTwitter size={24} /></a>
          <a href="#"><FaFacebookF size={24} /></a>
          <a href="#"><FaLinkedinIn size={24} /></a>
          <a href="#"><FaYoutube size={24} /></a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
