import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";

const ConsentModal = ({ onAccept, onDecline }) => {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const handleScroll = () => {
      const isBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 5;
      setScrolledToBottom(isBottom);
    };

    content.addEventListener("scroll", handleScroll);
    return () => content.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Modal show centered backdrop="static">
      <Modal.Header>
        <Modal.Title>Privacy Policy & Terms of Use</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          ref={contentRef}
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h5>Privacy Policy</h5>
          <p>
            <strong>StealthScan</strong> is a privacy-focused malware detection platform that analyzes encrypted files
            without decryption. We collect minimal metadata, including file properties (size, format, and hash values), 
            user inputs for scanning, and system logs for security purposes.
          </p>
          <p>
            We use <strong>homomorphic encryption</strong> and <strong>secure multiparty computation (SMPC)</strong> 
            to ensure data security. Your files are never stored or shared with third parties.
          </p>

          <h5>Terms of Use</h5>
          <p>By using StealthScan, you agree to these terms:</p>
          <ul>
            <li>We provide cybersecurity information for educational purposes.</li>
            <li>We are not responsible for any damages resulting from the use of this website.</li>
            <li>Users must not misuse or attempt to exploit the platform for unauthorized activities.</li>
            <li>We reserve the right to update these terms at any time.</li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onDecline} disabled={!scrolledToBottom}>
          Decline
        </Button>
        <Button variant="success" onClick={onAccept} disabled={!scrolledToBottom}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConsentModal;
