import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const TopAntivirus = () => {
  return (
    <Container className="p-4 mt-4">
      <h2 className="text-danger">🛡️ Best Antivirus Software</h2>
      <p>Here are some top antivirus programs for your protection:</p>
      <ListGroup>
        <ListGroup.Item>🔹 Bitdefender</ListGroup.Item>
        <ListGroup.Item>🔹 Norton Security</ListGroup.Item>
        <ListGroup.Item>🔹 McAfee Total Protection</ListGroup.Item>
        <ListGroup.Item>🔹 Kaspersky</ListGroup.Item>
        <ListGroup.Item>🔹 Avast</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default TopAntivirus;
