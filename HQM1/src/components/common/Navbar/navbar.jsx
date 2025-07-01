import React from 'react';
import { Users, FileText, Phone } from 'lucide-react';

const Navbar = ({ currentSection, setCurrentSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Brand with Glow Animation */}
          <div
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent 
                       animate-pulse hover:scale-105 transform transition duration-300 cursor-pointer"
            onClick={() => setCurrentSection('home')}
          >
            HAQUENICH
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-6">
            {[
              { label: 'Home', section: 'home' },
              { label: 'Team', section: 'team', icon: <Users size={18} /> },
              { label: 'Project Details', section: 'project', icon: <FileText size={18} /> },
              { label: 'Contact Us', section: 'contact', icon: <Phone size={18} /> },
            ].map(({ label, section, icon }) => (
              <button
                key={section}
                onClick={() => setCurrentSection(section)}
                className={`flex items-center space-x-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ease-in-out transform 
                  ${currentSection === section
                    ? 'bg-blue-500 text-white scale-105 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800 hover:scale-105 hover:shadow-md'}`}
              >
                {icon && icon}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
