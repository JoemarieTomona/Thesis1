import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="mt-4">
      <h2>Contact Us</h2>
      <p><strong>Company Headquarters:</strong></p>
      <p><strong>StealthScan Technologies</strong></p>
      <p>Brgy. Mamatid, City of Cabuyao, Laguna</p>
      <p>Phone: +63 915 019 4457</p>
      <p>Email: <a href="mailto:support@stealthscan.com">stealthscan3@gmail.com</a></p>

      {/* Google Map Embed */}
      <div className="map-container mb-4">
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.0720356712266!2d121.1527!3d14.2786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e42c6326b5a5%3A0x79b5c5f7b8c5e3e8!2sBrgy.%20Mamatid%2C%20Cabuyao%2C%20Laguna!5e0!3m2!1sen!2sph!4v1700000000000"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <h4>Send Us a Message</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
