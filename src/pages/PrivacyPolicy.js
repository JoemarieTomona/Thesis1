import React from "react";
import { Container } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="mt-4">
      <h2>Privacy Policy</h2>
      <p><strong>Effective Date:</strong> March 06, 2025</p>

      <h4>1. Introduction</h4>
      <p>
        Welcome to <strong>StealthScan</strong>, a privacy-preserving malware detection platform. 
        Your privacy is important to us, and we are committed to protecting your data while ensuring effective 
        malware detection without compromising the confidentiality of your files.
      </p>

      <h4>2. Information We Collect</h4>
      <p>Our system is designed to <strong>analyze encrypted files without decrypting them</strong>, ensuring that user data remains confidential. However, we may collect certain metadata and system information to enhance security and improve our services.</p>

      <h5>Data we may collect:</h5>
      <ul>
        <li><strong>File Metadata</strong> – We analyze file properties (size, format, hash values) but never access the actual file contents.</li>
        <li><strong>User Inputs</strong> – Any data you provide for malware scanning (e.g., filenames) is processed securely.</li>
        <li><strong>System Logs</strong> – We may collect logs such as timestamps, error reports, and system activity for security monitoring.</li>
      </ul>

      <h4>3. How We Use Your Data</h4>
      <p>We use the collected data for the following purposes:</p>
      <ul>
        <li>To detect potential malware in encrypted files without decrypting them.</li>
        <li>To improve our malware detection algorithms and system performance.</li>
        <li>To enhance security and prevent misuse of the platform.</li>
      </ul>

      <h4>4. Data Security & Protection</h4>
      <p>
        We implement strict security measures to protect your data, including <strong>homomorphic encryption</strong> and 
        <strong>secure multiparty computation (SMPC)</strong>. These technologies ensure that malware detection is performed 
        on encrypted data, preventing unauthorized access to your files.
      </p>

      <h4>5. Third-Party Services</h4>
      <p>
        We do not share or sell user data to third parties. However, we may use external cybersecurity tools for additional malware analysis, 
        ensuring compliance with privacy standards.
      </p>

      <h4>6. Your Rights & Choices</h4>
      <p>You have the right to:</p>
      <ul>
        <li>Request deletion of your submitted files and metadata.</li>
        <li>Access information about how your data is processed.</li>
        <li>Opt-out of data collection where applicable.</li>
      </ul>

      <h4>7. Contact Information</h4>
      <p>If you have any questions about this Privacy Policy, please contact us at <strong>sample@emali.com</strong>.</p>

      <p><strong>By using our service, you agree to the terms of this Privacy Policy.</strong></p>
    </Container>
  );
};

export default PrivacyPolicy;
