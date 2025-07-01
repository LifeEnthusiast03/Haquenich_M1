import React, { useState } from 'react';
import Navbar from './components/common/Navbar/navbar';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import ChatBot from './components/ui/ChatBot/ChatBot';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'team':
        return <Team />;
      case 'project':
        return <Project />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderCurrentSection()}
      <ChatBot />
    </div>
  );
};

export default App;