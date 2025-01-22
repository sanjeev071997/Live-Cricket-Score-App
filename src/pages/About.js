import React from 'react';
import './About.css'; 
import Navbar from '../Component/Navbar';

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-container">
      <h1>About Us</h1>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          We aim to provide real-time cricket scores and updates for cricket enthusiasts around the world. Our platform is
          designed to bring you the latest scores, news, and stats from ongoing matches.
        </p>

        <h2>Who We Are</h2>
        <p>
          We are a passionate team of developers and cricket fans working together to provide an engaging and seamless
          experience for cricket lovers. Our team has years of experience in software development, and we are always
          improving our platform.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Real-time score updates</li>
          <li>Simple and clean user interface</li>
          <li>Comprehensive coverage of matches worldwide</li>
          <li>Free access to cricket scores</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, feel free to <a href="/contact">reach out to us</a>. We would love to hear from you!
        </p>
      </section>
    </div>
    </>
  );
};

export default About;
