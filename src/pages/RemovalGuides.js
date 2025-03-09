import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RemovalGuides = () => {
    const guides = [
        {
          title: "Shafirewall.xyz Ads",
          question: "What kind of page is shafirewall[.]xyz?",
          description: "This deceptive website tricks users into allowing push notifications and redirects them to scams.",
          image: "/images/shafirewall.png",
          link: "/removal-guides/shafirewall",
        },
        {
          title: "Boramae Ransomware",
          question: "What kind of malware is Boramae?",
          description: "Boramae encrypts files and demands ransom for decryption, leaving a README.TXT ransom note.",
          image: "/images/boramae.png",
          link: "/removal-guides/boramae",
        },
        {
          title: "Roxaq Apps Unwanted Application",
          question: "What kind of application is Roxaq Apps?",
          description: "This PUA installs Legion Loader malware and fake browser extensions.",
          image: "/images/roxaq.png",
          link: "/removal-guides/roxaq",
        },
      ];      

  return (
    <Container>
      <h2 className="mt-4 mb-4 text-center">Virus and Spyware Removal Guides</h2>
      <Row>
        {guides.map((guide, index) => (
          <Col md={12} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Row className="g-0">
                <Col md={3} className="d-flex align-items-center">
                  <Card.Img
                    src={guide.image}
                    alt={guide.title}
                    className="img-fluid p-2"
                  />
                </Col>
                <Col md={9}>
                  <Card.Body>
                    <Card.Title>{guide.title}</Card.Title>
                    <Card.Text>
                      <strong>{guide.question}</strong>
                      <br />
                      {guide.description}
                    </Card.Text>
                    <Link to={guide.link}>Read more...</Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RemovalGuides;
