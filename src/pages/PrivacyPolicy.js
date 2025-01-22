import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file for styling
import Navbar from '../Component/Navbar';

const PrivacyPolicy = () => {
  return (
   <>
   <Navbar />
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <section className="privacy-policy-content">
        <h2>Introduction</h2>
        <p>
          Welcome to our website. Your privacy is very important to us. This Privacy Policy outlines the types of personal
          information that is received and collected and how it is used.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information when you visit our site, register on our platform, or interact with our content. This
          information may include your name, email address, IP address, etc.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use your information to provide services, improve user experience, and send relevant updates. We do not sell
          or share your personal information with third parties.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal data. Please contact us if you'd like to make any
          changes.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated
          effective date.
        </p>
      </section>
    </div>
   </>
  );
};

export default PrivacyPolicy;
