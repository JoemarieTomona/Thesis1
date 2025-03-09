import React from "react";
import { Container } from "react-bootstrap";

const TermsOfUse = () => {
  return (
    <Container className="mt-4">
      <h2>Terms of Use</h2>
      <p><strong>Last updated:</strong> March 06, 2025</p>

      <h4>1. Affiliate Relationship Disclosure</h4>
      <p>
        We may earn affiliate commissions for some antivirus and anti-spyware 
        software we recommend.
      </p>

      <h4>2. Use of Website</h4>
      <p>
        This website is for informational purposes only. We do not guarantee the 
        accuracy or reliability of the content.
      </p>

      <h4>3. Copyright Notice</h4>
      <p>
        All trademarks and copyrighted materials on this website belong to their 
        respective owners.
      </p>

      <h4>4. Liability</h4>
      <p>
        Use of this website is at your own risk. We are not responsible for any 
        damages or issues resulting from the use of our website.
      </p>

      <h4>5. Changes to Terms</h4>
      <p>
        We reserve the right to update or modify these terms at any time. Continued 
        use of our website after changes indicates your acceptance of the new terms.
      </p>

      <h4>6. Contact Information</h4>
      <p>
        If you have any questions about these Terms of Use, please contact us at 
        <strong> sample@email.com</strong>.
      </p>

      <p><strong>By using our service, you agree to these Terms of Use.</strong></p>
    </Container>
  );
};

export default TermsOfUse;
