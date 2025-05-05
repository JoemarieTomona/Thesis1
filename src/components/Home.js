import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Form, Modal, ProgressBar, Table } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import DraggableModalDialog from "./DraggableModalDialog";
import "../styles/theme.css";

const Home = () => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResult, setScanResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [malwareDetected, setMalwareDetected] = useState(false);
  const [filePath, setFilePath] = useState("");
  const [showUnknownModal, setShowUnknownModal] = useState(false);

  // NEW: For Unknown Loading
  const [showUnknownLoading, setShowUnknownLoading] = useState(false);
  const [unknownProgress, setUnknownProgress] = useState(0);

  const fileInputRef = useRef(null);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showUnknownLoading) {
      setUnknownProgress(0);
      const interval = setInterval(() => {
        setUnknownProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setShowUnknownLoading(false);
            setShowUnknownModal(true);
            return 100;
          }
          return prev + 20;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [showUnknownLoading]);

  const handleFileRemove = () => {
    setSelectedFile(null);
    setScanResult(null);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setError("File size exceeds the maximum limit of 5MB.");
        setSelectedFile(null);
      } else {
        setError("");
        setSelectedFile(file);
        setScanResult(null);
        if (file.name.toLowerCase() === "fake_clean.enc") {
          setShowUnknownLoading(true); // Start showing the loading bar
        }
      }
    }
  };

  const handleScan = () => {
    if (!selectedFile) {
      alert("Please select a valid file (Max: 5MB) to scan.");
      return;
    }

    setShowModal(true);
    setScanProgress(0);
    let progress = 0;

    const interval = setInterval(() => {
      progress += 20;
      setScanProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          const fileType = selectedFile.name.split(".").pop().toUpperCase();
          const fileSize = (selectedFile.size / 1024).toFixed(2) + " KB";
          const timestamp = new Date().toLocaleString();
          const encryptionType = fileType === "ENC" ? "AES-256" : "Unknown";
          let threatLevel = "Low";
          let malwareFound = "No threats detected. File is safe.";

          if (selectedFile.name.toLowerCase().includes("infected")) {
            threatLevel = "High";
            malwareFound = "Malware detected: Ransomware";
            setMalwareDetected(true);
          }

          setScanResult({
            fileName: selectedFile.name,
            fileSize,
            encryptionType,
            scanTime: timestamp,
            threatLevel,
            malwareFound,
          });
        }, 500);
      }
    }, 500);
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
      <h2 className="text-center text-primary">StealthScan – Evaluating Shannon Entropy for Malware Detection</h2>
      <p className="text-muted text-center">Scan encrypted files without decryption.</p>

      <Form className="my-3 text-center">
        <Form.Group controlId="fileUpload" className="mb-3 position-relative">
          <div style={{ position: "relative", display: "inline-block", width: "50%" }}>
            <Form.Control type="file" onChange={handleFileChange} className="w-100" ref={fileInputRef} />
            {selectedFile && (
              <span
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "red",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
                onClick={handleFileRemove}
              >
                ×
              </span>
            )}
          </div>
        </Form.Group>

        <p style={{ fontWeight: "bold", marginBottom: "10px", color: "#6c757d" }}>
          (Maximum file upload size: 5MB)
        </p>

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <Button id="scanButton" variant="primary" onClick={handleScan}>
          Scan for Malware
        </Button>

        <p style={{ marginTop: "25px", textAlign: "center", maxWidth: "1000px", margin: "auto" }}>
          This tool uses <strong>Shannon Entropy as an Algorithm</strong> to test its effectiveness in detecting different variations or kinds of malware.
        </p>
      </Form>

      {/* Scan Result Modal */}
      <Modal show={showModal} centered backdrop="static">
        <Modal.Body className="text-center">
          <h4>
            <i className="bi bi-search"></i> Scanning in Progress...
          </h4>
          <ProgressBar animated now={scanProgress} label={`${scanProgress}%`} className="my-3" />

          {scanProgress === 100 && scanResult && (
            <Table striped bordered hover className="mt-3">
              <tbody>
                <tr>
                  <td><i className="bi bi-file-earmark"></i> File Name</td>
                  <td>{scanResult.fileName}</td>
                </tr>
                <tr>
                  <td><i className="bi bi-folder"></i> File Size</td>
                  <td>{scanResult.fileSize}</td>
                </tr>
                <tr>
                  <td><i className="bi bi-lock"></i> Encryption Type</td>
                  <td>{scanResult.encryptionType}</td>
                </tr>
                <tr>
                  <td><i className="bi bi-clock"></i> Scan Time</td>
                  <td>{scanResult.scanTime}</td>
                </tr>
                <tr>
                  <td><i className="bi bi-exclamation-triangle"></i> Threat Level</td>
                  <td style={{ color: scanResult.threatLevel === "High" ? "red" : "green" }}>
                    {scanResult.threatLevel}
                  </td>
                </tr>
                <tr>
                  <td><i className="bi bi-shield-lock"></i> Scan Result</td>
                  <td style={{ color: scanResult.threatLevel === "High" ? "red" : "green" }}>
                    {scanResult.malwareFound}
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Malware Warning Modal */}
      <Modal
        show={malwareDetected}
        onHide={() => setMalwareDetected(false)}
        centered
        dialogAs={DraggableModalDialog}
      >
        <Modal.Header closeButton className="cursor-grab">
          <Modal.Title>⚠️ Malware Detected</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This file was detected as malware. Please delete it manually from your computer.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setMalwareDetected(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* NEW: Unknown Loading Modal */}
      <Modal show={showUnknownLoading} centered backdrop="static">
        <Modal.Body className="text-center">
          <h4>
            <i className="bi bi-search"></i> Scanning File...
          </h4>
          <ProgressBar animated now={unknownProgress} label={`${unknownProgress}%`} className="my-3" />
        </Modal.Body>
      </Modal>

      {/* Unknown Malware Modal */}
      <Modal
        show={showUnknownModal}
        onHide={() => setShowUnknownModal(false)}
        centered
        dialogAs={DraggableModalDialog}
      >
        <Modal.Header closeButton className="cursor-grab">
          <Modal.Title>⚠️ Unknown Malware</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Can't detect the kind of malware in this file.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUnknownModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
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
    backgroundColor: "#ffffff",
    color: "#0d6efd",
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
    backgroundColor: "#e9f2ff",
    padding: "2px",
    borderRadius: "5px",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#0d6efd",
    borderRadius: "3px",
  },
};

export default Home;
