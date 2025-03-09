import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleScan = () => {
    if (!selectedFile) {
      alert("Please select a file to scan.");
      return;
    }
    alert(`Scanning ${selectedFile.name} for malware...`);
  };

  return (
    <Container className="p-4 mt-5 rounded shadow bg-white">
      <h2 className="text-center text-primary">🔍 StealthScan - Secure File Scanner</h2>
      <p className="text-muted text-center">Scan encrypted files without decryption.</p>

      <Form className="my-3 text-center">
        <Form.Group controlId="fileUpload" className="mb-3">
          <Form.Control type="file" onChange={handleFileChange} className="w-50 mx-auto" />
        </Form.Group>
        <Button id="scanButton" variant="primary" onClick={handleScan}>Scan for Malware</Button>
        <p style={{ marginTop: "25px", textAlign: "center", maxWidth: "1000px", margin: "auto" }}>
  This tool uses <strong>homomorphic encryption</strong> and 
  <strong> secure multiparty computation</strong> to detect malware 
  without decrypting files.
</p>

      </Form>
    </Container>
  );
};

export default Home;
