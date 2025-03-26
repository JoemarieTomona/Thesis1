import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .send(
        "service_8jv08cs", // Replace with your EmailJS Service ID
        "template_k4ib35q", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "4mHZzydiaR15YNsUy" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setErrors({});
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <Container className="mt-4">
      <h2>Contact Us</h2>
      <p><strong>Company Headquarters:</strong></p>
      <p><strong>StealthScan Technologies</strong></p>
      <p>Brgy. Mamatid, City of Cabuyao, Laguna</p>
      <p>Phone: +63 915 019 4457</p>
      <p>Email: <a href="mailto:support@stealthscan.com">stealthscan3@gmail.com</a></p>

      {/* Google Map Embed (Retained) */}
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

      <h4>Send Us a Message</h4>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            isInvalid={!!errors.subject}
          />
          <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
