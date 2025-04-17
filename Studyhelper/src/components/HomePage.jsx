import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
 // <-- add your image path

export default function HomePage() {
  return (
    <div className="full-screen-wrapper">
      {/* Navbar */}
      <motion.nav 
        className="navbar"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <h1>ExamGenius</h1>
        <div className="menu">
      <Link to="/" className="nav-btn">Home</Link>
      <Link to="/explore" className="nav-btn">Explore</Link>
      <Link to="/login" className="nav-btn">Features</Link>
      <Link to="/about" className="nav-btn">About</Link>
      <Link to="/auth" className="login-btn">Login</Link>
 {/* Attractive login */}
     </div>

      </motion.nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <motion.div 
          className="hero"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content">
            <div className="hero-text">
              <h2>Smart Exam Prep <span>with Past Trends</span></h2>
              <p>Search questions, explore solutions, and predict what's coming next!</p>

              <div className="search-container">
                <input type="text" placeholder="Search a question..." />
                <button>Search</button>
              </div>

              <Link to="/explore" > <button className="cta-btn">Get Started →</button> </Link>
            </div>

            <div className="hero-image">
              <img src="https://idreamcareer.com/wp-content/uploads/2020/04/Study-Guide.jpg" alt="Study Illustration" />
            </div>
          </div>
        </motion.div>

        {/* Footer */}



        {/* Features Section */}
        <motion.div 
          className="features"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="feature-card">
            <h3>Track Previous Year Questions</h3>
            <p>Access a timeline of frequently asked questions.</p>
          </div>
          <div className="feature-card">
            <h3>Get Smart Predictions</h3>
            <p>AI-driven probability of recurrence for each question.</p>
          </div>
          <div className="feature-card">
            <h3>Solutions with Explanations</h3>
            <p>Clear, concise solutions with step-by-step guidance.</p>
          </div>
        </motion.div>

        <motion.footer 
  className="footer"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
>
  <div className="footer-content">
    <h2>ExamGenius</h2>
    <p>Empowering students with smart exam insights.</p>

    <div className="footer-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Contact</a>
    </div>

    <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
</div>


    <p className="copyright">© {new Date().getFullYear()} ExamGenius. All rights reserved.</p>
  </div>
</motion.footer>
      </main>
    </div>
  );
}
