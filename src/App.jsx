import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Masthead from './components/Masthead.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import BottomNav from './components/BottomNav.jsx';

import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import CV from './pages/CV.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Publications from './pages/Publications.jsx';
import ResearchDetail from './pages/ResearchDetail.jsx';
import Insights from './pages/Insights.jsx';

const App = () => {
  return (
    <>
      <Masthead />
      
      <div id="main" role="main">
        <Sidebar />
        
        <div className="archive">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience/" element={<Experience />} />
            <Route path="/projects/" element={<Portfolio />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/research/" element={<Publications />} />
            <Route path="/research/:slug" element={<ResearchDetail />} />
            <Route path="/cv/" element={<CV />} />
            <Route path="/year-archive/" element={<Insights />} />
            {/* Fallback to About for unmapped routes during migration */}
            <Route path="*" element={<About />} />
          </Routes>
        </div>
      </div>
      
      <BottomNav />
      <Footer />
    </>
  );
};

export default App;
