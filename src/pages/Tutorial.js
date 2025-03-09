import React, { useState } from "react";
import { Container, Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Tutorial = () => {
  const steps = [
    { title: "Welcome to StealthScan!", content: "This tutorial will guide you through the key features of the app.", image: "/tutorial/welcome.png" },
    { title: "Step 1: Upload a File", content: "Click on 'Choose File' to select an encrypted file for scanning.", image: "/tutorial/step1-upload.png" },
    { title: "Step 2: Scan for Malware", content: "Press the 'Scan for Malware' button to analyze the file securely.", image: "/tutorial/step2-scan.png" },
    { title: "Step 3: View Scan Results", content: "After scanning, you'll see whether the file is safe or contains malware.", image: "/tutorial/step3-results.png" },
    { title: "Done!", content: "You're now ready to use StealthScan! Click below to start detecting threats.", image: "/tutorial/done.png" },
  ];

  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <Container className="p-4 mt-5">
      <Card className="p-4 shadow text-center">
        <h3>{steps[step].title}</h3>
        <p>{steps[step].content}</p>
        <Image src={steps[step].image} alt="Tutorial Step" fluid className="my-3" />

        <div className="d-flex justify-content-between">
          {step > 0 && <Button variant="secondary" onClick={handleBack}>Back</Button>}
          {step < steps.length - 1 ? (
            <Button variant="primary" onClick={handleNext}>Next</Button>
          ) : (
            <Link to="/"><Button variant="success">Start Using StealthScan</Button></Link>
          )}
        </div>
      </Card>
    </Container>
  );
};

export default Tutorial;
