import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="mt-4">
      <h2>About StealthScan</h2>
      <p>
        <strong>StealthScan</strong> is a privacy-preserving malware detection platform designed to analyze encrypted files without decrypting them. Our mission is to provide cutting-edge security solutions while ensuring user data confidentiality. By leveraging advanced encryption techniques, we detect potential threats without compromising the integrity of your files.
      </p>

      <h4>Our Mission</h4>
      <p>
        We aim to revolutionize malware detection with privacy-first technology. Our system ensures that even sensitive information remains protected while scanning for malicious threats. With a team of cybersecurity experts, we are committed to improving digital security without exposing private user data.
      </p>

      <h3 className="mt-5">Meet Our Team</h3>

      <Row className="mt-4">
        <Col md={4} className="text-center">
          <Image src="/images/founder.jpg" roundedCircle fluid width="150" />
          <h5 className="mt-3">Jhonna Acebo</h5>
          <p><strong>Founder & Security Architect</strong></p>
          <p>
            Jhonna has over a decade of experience in cybersecurity, specializing in secure malware detection. With expertise in homomorphic encryption and privacy-enhancing technologies, she leads StealthScan's vision for secure digital protection.
          </p>
        </Col>

        <Col md={4} className="text-center">
          <Image src="/images/researcher.jpg" roundedCircle fluid width="150" />
          <h5 className="mt-3">Joemarie Tomona Jr.</h5>
          <p><strong>Lead Malware Researcher</strong></p>
          <p>
            Joemarie is a cybersecurity researcher with expertise in analyzing malware behavior in encrypted environments. Passionate about ethical hacking and cybersecurity trends, he helps StealthScan stay ahead of emerging threats.
          </p>
        </Col>

        <Col md={4} className="text-center">
          <Image src="/images/marketing.jpg" roundedCircle fluid width="150" />
          <h5 className="mt-3">Karl Angelo Mendoza</h5>
          <p><strong>Marketing & Community Engagement</strong></p>
          <p>
            Karl specializes in cybersecurity awareness and community engagement. He ensures that users understand StealthScan's privacy-preserving technology and helps drive adoption through education and outreach.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
