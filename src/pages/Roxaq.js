import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Roxaq = () => {
  return (
    <Container>
      <h2 className="mt-4">How to Remove Roxaq Apps (Potentially Unwanted Application - PUA)</h2>
      <p>
        <strong>Roxaq</strong> is a <b>Potentially Unwanted Application (PUA)</b> that often installs without user consent.
        It can act as a dropper for other malware, such as <b>Trojan loaders</b> and <b>adware</b>.
      </p>

      <h4>🚨 Symptoms of Infection:</h4>
      <ul>
        <li>Unexpected installation of Roxaq Apps.</li>
        <li>Increased ads and pop-ups while browsing.</li>
        <li>System slowdowns and high CPU usage.</li>
      </ul>

      <h4>🛑 Removal Steps:</h4>
      <h5>1️⃣ Uninstall Roxaq Apps</h5>
      <p>Go to <b>Control Panel</b> → <b>Programs & Features</b> → Uninstall <b>Roxaq</b>.</p>

      <h5>2️⃣ Remove Suspicious Browser Extensions</h5>
      <p>Check and remove extensions related to <b>Roxaq</b> or fake "Save to Google Drive" add-ons.</p>

      <h5>3️⃣ Run Anti-Malware Scan</h5>
      <p>Use <b>Malwarebytes</b> or <b>AdwCleaner</b> to remove residual threats.</p>

      {/* ✅ Link to Removal Guides */}
      <Link to="/removal-guides">
        <Button variant="primary" className="mt-3">Back to Removal Guides</Button>
      </Link>
    </Container>
  );
};

export default Roxaq;
