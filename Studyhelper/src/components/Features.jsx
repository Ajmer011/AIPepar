import React from "react";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import "./Features.css"; // Link to the CSS below

const featuresData = [
  {
    title: "📚 Full Question Viewer",
    description:
      "Get the complete question text with proper formatting for easier understanding."
  },
  {
    title: "📅 Appeared Years",
    description:
      "View which years the question appeared using chips or a timeline-style layout."
  },
  {
    title: "🧠 Detailed Solution",
    description:
      "LaTeX-supported or richly formatted answers for in-depth understanding of concepts."
  },
  {
    title: "📊 Probability Analysis",
    description:
      "See the likelihood of this question appearing again in future exams using a graph or percentage meter."
  },
  {
    title: "🔗 Related Questions",
    description:
      "Discover questions with similar patterns or concepts to improve conceptual clarity."
  },
  {
    title: "📌 Bookmark & 🚩 Report",
    description:
      "Bookmark for later revision or report issues with a question instantly."
  }
];

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <button className="back-button">
        <HiArrowLeft className="back-icon" />
        Back
      </button>

      {featuresData.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <h2 className="feature-title">{feature.title}</h2>
          <p className="feature-description">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesPage;
