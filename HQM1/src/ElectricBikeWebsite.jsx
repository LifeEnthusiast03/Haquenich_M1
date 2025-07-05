
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Send, MessageCircle, X, Users, FileText } from 'lucide-react';
import Navbar from './components/common/Navbar/navbar';
import HomePage from './pages/Home/Home';
import TeamPage from './pages/Team/Team';
import ContactPage from './pages/Contact/Contact';


const ElectricBikeWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m here to help you learn about our electric bike. Ask me anything!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bikeRef = useRef();
  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsTyping(true);

    // Simulate API delay
    setTimeout(() => {
      const responses = [
        "Our electric bike features a powerful 750W motor with a range of up to 50 miles on a single charge!",
        "The bike has a lightweight aluminum frame and can reach speeds up to 28 mph with pedal assist.",
        "We use premium lithium-ion batteries that charge in just 4-6 hours for maximum convenience.",
        "Our bike includes smart features like GPS tracking, anti-theft alarm, and mobile app connectivity.",
        "The bike is designed for both urban commuting and off-road adventures with multiple riding modes."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setIsTyping(false);
      setChatMessages(prev => [...prev, { type: 'bot', text: randomResponse }]);
    }, 1500);
  };

  const Chatbot = () => (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} />
              <span className="font-semibold">ElectricBike Assistant</span>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="hover:bg-white/20 p-1 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                placeholder="Ask about our electric bike..."
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <button
                onClick={sendChatMessage}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
  
  const ProjectPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Project Details</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge technology and innovative features that make our electric bike extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Technical Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Motor Power</span>
                  <span className="font-semibold">750W Brushless</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Battery Capacity</span>
                  <span className="font-semibold">48V 15Ah Lithium-ion</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Max Range</span>
                  <span className="font-semibold">50+ Miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Top Speed</span>
                  <span className="font-semibold">28 MPH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Frame Material</span>
                  <span className="font-semibold">Aluminum Alloy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Weight</span>
                  <span className="font-semibold">55 lbs</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Smart Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span>GPS tracking and anti-theft alarm system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span>Mobile app connectivity for ride statistics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span>Multiple riding modes (Eco, Normal, Sport)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span>LED headlight and taillight integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span>Regenerative braking system</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Sustainability Focus</h3>
              <p className="text-gray-300 mb-4">
                Our electric bike is designed with environmental responsibility at its core. 
                We use sustainable materials and manufacturing processes to minimize our carbon footprint.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• 100% recyclable aluminum frame</li>
                <li>• Eco-friendly battery technology</li>
                <li>• Carbon-neutral shipping</li>
                <li>• Reduces CO2 emissions by 90% vs cars</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Development Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Q1 2024 - Concept Design</div>
                    <div className="text-sm text-gray-400">Initial prototyping and testing</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Q2 2024 - Engineering</div>
                    <div className="text-sm text-gray-400">Motor and battery optimization</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Q3 2024 - Testing</div>
                    <div className="text-sm text-gray-400">Real-world performance validation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Q4 2024 - Production</div>
                    <div className="text-sm text-gray-400">Manufacturing and quality control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render current section
  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'team':
        return <TeamPage />;
      case 'project':
        return <ProjectPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderCurrentSection()}
      <Chatbot />
    </div>
  );
};

export default ElectricBikeWebsite;