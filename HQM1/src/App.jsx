// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 class="text-3xl font-bold underline bg-blue-500 text-white">
//   Hello world!
// </h1>
//     </>
//   )
// }

// export default App
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Send, MessageCircle, X, Users, FileText } from 'lucide-react';

const ElectricBikeWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m here to help you learn about our electric bike. Ask me anything!' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bikeRef = useRef();

  // 3D Bike Animation
  useEffect(() => {
    const bike = bikeRef.current;
    if (bike) {
      let rotation = 0;
      const animate = () => {
        rotation += 0.01;
        bike.style.transform = `rotateY(${rotation}rad) rotateX(0.1rad)`;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  // Simulate Gemini API response
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

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Engineer",
      email: "alex@electricbike.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Chen",
      role: "Design Director",
      email: "sarah@electricbike.com",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mike Rodriguez",
      role: "Battery Specialist",
      email: "mike@electricbike.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emma Wilson",
      role: "Software Developer",
      email: "emma@electricbike.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const BikeModel = () => (
    <div 
      ref={bikeRef}
      className="relative w-96 h-96 mx-auto"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Bike Frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
      
      {/* Main Frame */}
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="bikeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        
        {/* Wheels */}
        <circle cx="80" cy="200" r="40" fill="none" stroke="url(#bikeGradient)" strokeWidth="6" className="animate-spin" style={{transformOrigin: '80px 200px'}} />
        <circle cx="320" cy="200" r="40" fill="none" stroke="url(#bikeGradient)" strokeWidth="6" className="animate-spin" style={{transformOrigin: '320px 200px'}} />
        
        {/* Frame */}
        <path d="M80 200 L200 120 L320 200 M200 120 L200 80 M160 160 L240 160" 
              stroke="url(#bikeGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
        
        {/* Seat */}
        <rect x="190" y="75" width="20" height="8" fill="url(#bikeGradient)" rx="4" />
        
        {/* Handlebars */}
        <path d="M190 130 L210 130" stroke="url(#bikeGradient)" strokeWidth="6" strokeLinecap="round" />
        
        {/* Battery Pack */}
        <rect x="170" y="140" width="60" height="20" fill="#fbbf24" rx="10" />
        <text x="200" y="155" textAnchor="middle" className="text-xs font-bold fill-white">BATTERY</text>
      </svg>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
    </div>
  );

  const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ElectricBike
          </div>
          <div className="flex space-x-8">
            <button 
              onClick={() => setCurrentSection('home')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                currentSection === 'home' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <span>Home</span>
            </button>
            <button 
              onClick={() => setCurrentSection('team')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                currentSection === 'team' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Users size={18} />
              <span>Team</span>
            </button>
            <button 
              onClick={() => setCurrentSection('project')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                currentSection === 'project' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <FileText size={18} />
              <span>Project Details</span>
            </button>
            <button 
              onClick={() => setCurrentSection('contact')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                currentSection === 'contact' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Phone size={18} />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold leading-tight">
                The Future of
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Electric Mobility
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience the perfect blend of power, efficiency, and style with our revolutionary electric bike. 
                Designed for the modern rider who demands performance without compromise.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-300">Miles Range</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-purple-400">28</div>
                <div className="text-sm text-gray-300">MPH Top Speed</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-green-400">4-6</div>
                <div className="text-sm text-gray-300">Hours Charge</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center space-x-2">
              <span>Explore Features</span>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Right 3D Bike */}
          <div className="flex justify-center">
            <BikeModel />
          </div>
        </div>
      </div>
    </div>
  );

  const TeamPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate engineers and designers working together to revolutionize electric mobility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
              <div className="flex items-center space-x-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full border-4 border-blue-500 flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                    <span className="text-sm">{member.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
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

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to revolutionize your ride? Get in touch with us to learn more about our electric bike
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-blue-400 mt-1" size={24} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">info@electricbike.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-green-400 mt-1" size={24} />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-purple-400 mt-1" size={24} />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-gray-300">
                        123 Innovation Drive<br />
                        Tech City, TC 12345
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
      <Navbar />
      {renderCurrentSection()}
      <Chatbot />
    </div>
  );
};

export default ElectricBikeWebsite;