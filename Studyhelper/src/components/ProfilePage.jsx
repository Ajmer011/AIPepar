import React, { useState } from 'react';
import './ProfilePage.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data for profile, searches, etc.
const initialProfileInfo = {
  name: 'Ajmer thakur',
  email: 'thakuraarju@07.com',
  course: 'B.Tech Computer Science',
  profilePic: 'https://via.placeholder.com/150',
  contact: '9516991004',
  semester: '6th Semester',
};

const recentlySearched = ['Linear Algebra', 'Data Structures', 'Thermodynamics'];

const bookmarkedQuestions = ['Integrals', 'Machine Learning Basics', 'Quantum Physics'];

const practiceStats = {
  totalQuestions: 50,
  questionsPracticed: 35,
  practicePercentage: 70,
};

const customPracticeSets = [
  { set: 'Set 1: Calculus Practice', description: 'Focuses on integrals and derivatives.' },
  { set: 'Set 2: Data Structures Challenge', description: 'Includes tree, graph, and array-based problems.' },
  { set: 'Set 3: Probability & Statistics', description: 'Includes distribution, mean, variance problems.' },
];

const questionFrequency = [
  { year: '2018', Math: 8, Physics: 6, Chemistry: 7 },
  { year: '2019', Math: 10, Physics: 8, Chemistry: 9 },
  { year: '2020', Math: 12, Physics: 7, Chemistry: 10 },
  { year: '2021', Math: 15, Physics: 12, Chemistry: 11 },
  { year: '2022', Math: 17, Physics: 13, Chemistry: 14 },
];

const recommendedTopics = [
  'Integration and Differentiation (Math)',
  'Optics and Modern Physics (Physics)',
  'Organic Chemistry Basics (Chemistry)',
];

function App() {
   
  const [profileInfo, setProfileInfo] = useState(initialProfileInfo);
  const [newProfilePic, setNewProfilePic] = useState(null);
 

  // Handle file upload for profile picture
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProfileInfo((prevInfo) => ({
        ...prevInfo,
        profilePic: fileURL,
      }));
    }
  };

  // Pie chart data for subject weightage
  const pieChartData = {
    labels: ['Math', 'Physics', 'Chemistry'],
    datasets: [
      {
        label: 'Subject Weightage',
        data: [40, 30, 30],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
        hoverOffset: 4,
      },
    ],
  };

  // Heatmap color generation function
  const getColor = (value) => {
    if (value > 15) return '#ff5722'; // Red
    if (value > 10) return '#ff9800'; // Orange
    return '#8bc34a'; // Green
  };

  return (
    
    <div className="student-space">
      <div className="profile-card">
        <img src={profileInfo.profilePic} alt="Profile" className="profile-pic" />
        <div className="profile-info">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
          <h2>{profileInfo.name}</h2>
          <p>{profileInfo.email}</p>
          <p>{profileInfo.course}</p>
          <p>📞 {profileInfo.contact}</p>
          <p>📚 {profileInfo.semester}</p>
          <input type="file" onChange={handleProfilePicChange} accept="image/*" className="profile-pic-upload" />
        </div>
      </div>

      {/* Recently Searched Questions */}
      <div className="section">
        <h3 className="section-title">🔍 Recently Searched Questions</h3>
        <div className="recently-searched">
          {recentlySearched.map((item, index) => (
            <div className="recent-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bookmarked Questions */}
      <div className="section">
        <h3 className="section-title">🔖 Bookmarked Questions</h3>
        <div className="bookmarked-questions">
          {bookmarkedQuestions.map((item, index) => (
            <div className="bookmarked-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="section">
        <h3 className="section-title">📊 Progress Tracker</h3>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${practiceStats.practicePercentage}%`,
              backgroundColor: practiceStats.practicePercentage >= 70 ? 'green' : 'orange',
            }}
          ></div>
        </div>
        <div className="progress-info">
          <p>
            {practiceStats.questionsPracticed} / {practiceStats.totalQuestions} questions practiced
          </p>
          <p>{practiceStats.practicePercentage}% Progress</p>
        </div>
      </div>

      {/* Custom Practice Sets */}
      <div className="section">
        <h3 className="section-title">📝 Custom Practice Sets</h3>
        <div className="practice-sets">
          {customPracticeSets.map((set, index) => (
            <div className="practice-set-item" key={index}>
              <h4>{set.set}</h4>
              <p>{set.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pie Chart of Subject Weightage */}
      <div className="section">
        <h3 className="section-title">🍰 Subject-wise Weightage (Pie Chart)</h3>
        <Pie data={pieChartData} />
      </div>

      {/* Heatmap of Question Frequency */}
      <div className="section">
        <h3 className="section-title">🔥 Heatmap of Question Frequency Over Years</h3>
        <table className="heatmap">
          <thead>
            <tr>
              <th>Year</th>
              <th>Math</th>
              <th>Physics</th>
              <th>Chemistry</th>
            </tr>
          </thead>
          <tbody>
            {questionFrequency.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td style={{ backgroundColor: getColor(item.Math) }}>{item.Math}</td>
                <td style={{ backgroundColor: getColor(item.Physics) }}>{item.Physics}</td>
                <td style={{ backgroundColor: getColor(item.Chemistry) }}>{item.Chemistry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommended Practice Topics */}
      <div className="section">
        <h3 className="section-title">🔎 Recommended Practice Topics</h3>
        <ul className="recommended-topics">
          {recommendedTopics.map((topic, index) => (
            <li key={index} className="topic-item">
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
