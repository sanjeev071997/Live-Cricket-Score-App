import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Component/Navbar';
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });

          // Hide the status message after 5 seconds
          setTimeout(() => {
            setStatus('');
          }, 5000);
        },
        
        (error) => {
          setStatus('Failed to send message.');
        }
      );
  };

  return (
    <>
      <Navbar />
      <section className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below.</p>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Your Name"
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your Email"
          />

          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Your Message"
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        {status && <p aria-live="polite">{status}</p>}
      </section>
    </>
  );
};

export default Contact;
