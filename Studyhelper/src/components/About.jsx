import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import "./About.css"; // Link to external CSS

const AboutPage = () => {
  return (
    <div className="about-page">
      
      {/* Back Button */}
      <button className="back-button">
        <HiArrowLeft className="back-icon" />
        Back
      </button>

      {/* Mission Section */}
      <motion.div
        className="card mission-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">🌟 Our Mission</h2>
        <p className="section-description">
          We aim to empower students by providing intelligent tools for better exam preparation.
          From analyzing questions to providing practice recommendations – our project is built with students in mind!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="card contact-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <h2 className="section-title">📩 Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <textarea placeholder="Your Message" rows="4" className="form-textarea" />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="card social-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="section-title">🌐 Connect With Us</h2>
        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
