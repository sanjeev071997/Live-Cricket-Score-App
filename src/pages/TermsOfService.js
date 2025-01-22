import React from 'react';
import './TermsOfService.css'; // Import the CSS file for styling
import Navbar from '../Component/Navbar';

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="terms-of-service-container">
        <h1>Terms of Service</h1>
        <section className="terms-of-service-content">
          <h2>Introduction</h2>
          <p>
            Welcome to our website. By accessing or using our services, you agree to comply with these Terms of Service.
            Please read them carefully before using our services.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By using our website and services, you agree to these terms. If you do not agree, please do not use our services.
          </p>

          <h2>2. Service Use</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms. Any violation may result
            in the termination of your access.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            You may need to register for an account to access certain features. You are responsible for maintaining the
            confidentiality of your account information.
          </p>

          <h2>4. Payment and Subscription</h2>
          <p>
            Some features may require payment or subscription. By subscribing, you agree to pay the associated fees as outlined
            on our website.
          </p>

          <h2>5. User Content</h2>
          <p>
            You are responsible for any content you post or share on our platform. You grant us a license to use this content
            in connection with our services.
          </p>

          <h2>6. Privacy</h2>
          <p>
            Your privacy is important to us. Please review our <a href="/privacy-policy">Privacy Policy</a> to understand how
            we collect, use, and protect your personal information.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            We are not liable for any damages arising out of the use or inability to use our services. This includes indirect,
            incidental, or consequential damages.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you violate any of these terms. You can terminate your
            account at any time by contacting us.
          </p>

          <h2>9. Modifications</h2>
          <p>
            We may modify these Terms of Service at any time. Any changes will be posted on this page with an updated effective
            date.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in
            which we operate.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms of Service, please contact us through our <a href="/contact">Contact Page</a>.
          </p>
        </section>
      </div>
    </>
  );
};

export default TermsOfService;
