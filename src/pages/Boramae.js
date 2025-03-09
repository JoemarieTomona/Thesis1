import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Boramae = () => {
  return (
    <Container>
      <h2 className="mt-4">How to Remove Boramae Ransomware (Decryption Guide)</h2>
      <p>
        <strong>Boramae</strong> is a <b>ransomware-type malware</b> that encrypts user files and demands a ransom for decryption.
        It appends filenames with the <code>.boramae</code> extension (e.g., <code>document.txt</code> → <code>document.txt.boramae</code>).
      </p>

      <h4>🚨 Symptoms of Infection:</h4>
      <ul>
        <li>Files renamed with the <code>.boramae</code> extension.</li>
        <li>Ransom note titled <b>"README.TXT"</b> appears on the desktop.</li>
        <li>System performance slowdown due to encryption processes.</li>
      </ul>

      <h4>🛑 Removal & Decryption Steps:</h4>
      <h5>1️⃣ Disconnect from the Internet</h5>
      <p>Prevent the ransomware from communicating with its servers.</p>

      <h5>2️⃣ Use Antivirus & Ransomware Removal Tools</h5>
      <p>Scan with <b>Malwarebytes</b> or <b>Ransomware Defender</b>.</p>

      <h5>3️⃣ Restore Files from Backups</h5>
      <p>If you have backups, restore your files safely.</p>

      <h5>4️⃣ Use Free Decryption Tools (If Available)</h5>
      <p>Check <b>NoMoreRansom.org</b> for decryption solutions.</p>

      {/* ✅ Link to Removal Guides */}
      <Link to="/removal-guides">
        <Button variant="primary" className="mt-3">Back to Removal Guides</Button>
      </Link>
    </Container>
  );
};

export default Boramae;
