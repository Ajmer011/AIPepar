import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebookF, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="auth-container">
      <motion.div
        className="auth-box"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <motion.h2
          className="auth-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </motion.h2>

        <form className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}

          <input type="email" placeholder="Email" required />

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <span className="password-toggle" onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {!isLogin && (
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                required
              />
              <span className="password-toggle" onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          <motion.button
            type="submit"
            className="auth-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </motion.button>
        </form>

        <div className="divider">or continue with</div>
        <div className="social-icons">
          <FaGoogle className="icon" />
          <FaFacebookF className="icon" />
          <FaGithub className="icon" />
        </div>

        <div className="toggle-text">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={toggleForm}>{isLogin ? ' Sign Up' : ' Login'}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
