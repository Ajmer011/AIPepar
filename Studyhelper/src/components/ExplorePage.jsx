import React, { useState } from 'react';
import './ExplorePage.css';
import { motion } from 'framer-motion';



const mockData = [
  {
    id: 1,
    question: 'What is polymorphism in OOP?',
    years: [2019, 2021, 2023],
    probability: 85,
    difficulty: 'Medium',
    subject: 'OOP'
  },
  {
    id: 2,
    question: 'Explain normalization in DBMS.',
    years: [2020, 2022],
    probability: 70,
    difficulty: 'Hard',
    subject: 'DBMS'
  },
  // Add more mock questions...
];


export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ subject: '', year: '', difficulty: '' });
  const [sortBy, setSortBy] = useState('');

  const filteredData = mockData.filter(q => {
    return (
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter.subject ? q.subject === filter.subject : true) &&
      (filter.year ? q.years.includes(parseInt(filter.year)) : true) &&
      (filter.difficulty ? q.difficulty === filter.difficulty : true)
    );
  }).sort((a, b) => {
    if (sortBy === 'mostAsked') return b.years.length - a.years.length;
    if (sortBy === 'highProb') return b.probability - a.probability;
    if (sortBy === 'recent') return Math.max(...b.years) - Math.max(...a.years);
    return 0;
  });

  return (
    <motion.div className="search-filter-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="title">Search Exam Questions</h2>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>


      <div className="controls">
        <input type="text" placeholder="Search a question..." onChange={(e) => setSearchTerm(e.target.value)} />

        <select onChange={(e) => setFilter({ ...filter, subject: e.target.value })}>
          <option value="">All Subjects</option>
          <option value="OOP">OOP</option>
          <option value="DBMS">DBMS</option>
          <option value="CN">CN</option>
        </select>

        <select onChange={(e) => setFilter({ ...filter, year: e.target.value })}>
          <option value="">All Years</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>

        <select onChange={(e) => setFilter({ ...filter, difficulty: e.target.value })}>
          <option value="">All Levels</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="mostAsked">Most Asked</option>
          <option value="highProb">High Probability</option>
          <option value="recent">Recent Years</option>
        </select>
      </div>

      <div className="results">
        {filteredData.map(q => (
          <motion.div key={q.id} className="question-card" whileHover={{ scale: 1.03 }}>
            <h3>{q.question}</h3>
            <p><strong>Appeared in:</strong> {q.years.join(', ')}</p>
            <p><strong>Difficulty:</strong> {q.difficulty}</p>
            <div className="progress-bar">
              <div className="fill" style={{ width: `${q.probability}%` }}></div>
              <span>{q.probability}% chance in next exam</span>
            </div>
            <button className="view-btn">View Solution</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
