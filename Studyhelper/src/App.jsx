import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Auth from "./components/Auth";
import ExplorePage from "./components/ExplorePage";
import MainPage from "./components/MainPage";
import ProfilePage from "./components/ProfilePage";
import About from "./components/About";
import ResultPage from "./components/ResultPage";
import FeaturesPage from "./components/Features";
// import LoginPage from "./components/LoginPage";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/login" element={<LoginPage />} />*/}
        <Route path="/explore" element={<ExplorePage />} /> 
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<About /> }/>
        <Route path="/result" element={<ResultPage/> }/>
        <Route path="/features" element={<FeaturesPage />}/>
      </Routes>
    </Router>
  );
}
