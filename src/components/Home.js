import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return oldProgress + 5; // Increase progress by 5% every 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

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

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <h3 style={styles.loadingText}>LOADING... {progress}%</h3>
        <div style={styles.progressBarContainer}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }} />
        </div>
      </div>
    );
  }

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

const styles = {
  loadingContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ffffff", // White background
    color: "#0d6efd", // Bootstrap Primary Blue
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace",
    fontSize: "20px",
    zIndex: 9999,
  },
  loadingText: {
    marginBottom: "10px",
    fontWeight: "bold",
  },
  progressBarContainer: {
    width: "80%",
    maxWidth: "500px",
    height: "20px",
    border: "2px solid #0d6efd",
    display: "flex",
    backgroundColor: "#e9f2ff", // Light blue background
    padding: "2px",
    borderRadius: "5px",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#0d6efd", // Primary blue progress fill
    borderRadius: "3px",
  },
};

export default Home;
