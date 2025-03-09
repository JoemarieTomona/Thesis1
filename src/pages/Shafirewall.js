import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shafirewall = () => {
  return (
    <Container>
      <h2 className="mt-4">How to Remove Shafirewall.xyz Ads (Adware Removal Guide)</h2>
      <p>
        <strong>Shafirewall.xyz</strong> is a **deceptive website** that tricks users into enabling push notifications for spam ads.  
        It may also redirect visitors to **malicious sites** promoting scams, phishing, or malware.
      </p>

      <h4>🚨 Symptoms of Infection:</h4>
      <ul>
        <li>Unwanted pop-up ads appearing on your desktop.</li>
        <li>Browser redirects to suspicious sites.</li>
        <li>Fake warnings urging you to click "Allow" on notifications.</li>
      </ul>

      <h4>🛑 Removal Steps:</h4>
      <h5>1️⃣ Block Notifications in Your Browser</h5>
      <p>Go to your browser settings → Notifications → Remove **Shafirewall.xyz**.</p>

      <h5>2️⃣ Reset Your Browser</h5>
      <p>Clear cache, cookies, and site settings.</p>

      <h5>3️⃣ Use Malware Removal Tools</h5>
      <p>Run **Malwarebytes** or **HitmanPro** to scan and remove adware.</p>

      <Link to="/removal-guides">
        <button className="btn btn-primary">Back to Removal Guides</button>
      </Link>
    </Container>
  );
};

export default Shafirewall;
