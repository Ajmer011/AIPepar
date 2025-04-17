import React from "react";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { FaBookmark, FaFlag } from "react-icons/fa";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import "./ResultPage.css";

const QuestionDetailsPage = () => {
  return (
    <div className="question-page">
      {/* Back Button */}
      <button className="back-button">
        <HiArrowLeft className="icon" /> Back
      </button>

      {/* Question Section */}
      <motion.div
        className="card question-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">📘 Question</h2>
        <p className="question-text">
          What is the derivative of <InlineMath math="f(x) = x^2 \sin(x)" /> ?
        </p>
      </motion.div>

      {/* Appeared Years */}
      <motion.div
        className="card years-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <h3 className="section-title">📅 Appeared In</h3>
        <div className="year-chips">
          {["2019", "2021", "2023"].map((year) => (
            <span key={year} className="chip">
              {year}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Solution Section */}
      <motion.div
        className="card solution-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3 className="section-title">🧠 Solution</h3>
        <BlockMath math="f'(x) = \frac{d}{dx}(x^2 \sin(x)) = 2x\sin(x) + x^2\cos(x)" />
      </motion.div>

      {/* Probability Analysis */}
      <motion.div
        className="card probability-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="section-title">📈 Probability of Reappearing</h3>
        <div className="probability-meter">
          <div className="progress-bar" style={{ width: "75%" }}>75%</div>
        </div>
      </motion.div>

      {/* Related Questions */}
      <motion.div
        className="card related-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="section-title">🔗 Related Questions</h3>
        <ul className="related-list">
          <li>Find the derivative of <InlineMath math="x^3 \cos(x)" /></li>
          <li>Apply product rule to <InlineMath math="x^2 \ln(x)" /></li>
          <li>Differentiate <InlineMath math="e^x \sin(x)" /></li>
        </ul>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="card actions-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <button className="action-button">
          <FaBookmark className="icon" /> Bookmark
        </button>
        <button className="action-button">
          <FaFlag className="icon" /> Report
        </button>
      </motion.div>
    </div>
  );
};

export default QuestionDetailsPage;
