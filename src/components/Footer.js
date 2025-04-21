import React from "react";
import { Container } from "react-bootstrap";
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6"; // Updated import
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
          <a href="https://x.com/StealthScan_" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} /> {/* Updated to X logo */}
          </a>
          <a href="https://www.facebook.com/profile.php?id=61574758528131" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com/in/stealth-scan-436212357/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://www.youtube.com/channel/UCI3j8NngdTHdjBDxJwcZqtg" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
