
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Send, MessageCircle, X, Users, FileText } from 'lucide-react';
import Navbar from './components/common/Navbar/navbar';
import HomePage from './pages/Home/Home';


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

  const teamMembers = [
   {
  name: "Ananya Roy",
  college: "Asansol Engineering College",
  department: "Electrical Engineering",
  phone: "+91-9876543222",
  email: "ananya.roy@example.com",
  image: "/ananya.jpg", // Place 'ananya.jpg' inside /public
  projectRole: "Embedded Systems Engineer",
  specialization: "Battery Design, PCB Development, IoT Sensors"
},
{
  name: "Ritvik Sharma",
  college: "Heritage Institute of Technology",
  department: "Mechanical Engineering",
  phone: "+91-9876543233",
  email: "ritvik.sharma@example.com",
  image: "/sougata.jpg", // Place 'ritvik.jpg' inside /public
  projectRole: "Mechanical Design Lead",
  specialization: "CAD Modeling, Bike Chassis, Kinematics"
},
{
  name: "Sneha Das",
  college: "Asansol Engineering College",
  department: "Information Technology",
  phone: "+91-9876543244",
  email: "sneha.das@example.com",
  image: "/sneha.jpg", // Place 'sneha.jpg' inside /public
  projectRole: "Mobile App Developer",
  specialization: "Flutter, Firebase, User Interface Design"
},
{
  name: "Kunal Sengupta",
  college: "IEM Kolkata",
  department: "Electronics and Communication",
  phone: "+91-9876543255",
  email: "kunal.sengupta@example.com",
  image: "/kunal.jpg", // Place 'kunal.jpg' inside /public
  projectRole: "IoT Integration Expert",
  specialization: "Microcontrollers, BLE Modules, GSM/GPS"
},
{
  name: "Rahul Verma",
  college: "IEM Kolkata",
  department: "Electronics and Communication",
  phone: "+91-9876543255",
  email: "rahul.verma@example.com",
  image: "/rahul.jpg",
  projectRole: "Firmware Engineer",
  specialization: "Microcontrollers, Embedded C, Bluetooth LE"
},
{
  name: "Priya Sen",
  college: "Heritage Institute of Technology",
  department: "Computer Science and Engineering",
  phone: "+91-9876543266",
  email: "priya.sen@example.com",
  image: "/priya.jpg",
  projectRole: "Cloud Integration Specialist",
  specialization: "AWS, Node.js, Realtime Data Sync"
},
{
  name: "Abhinav Gupta",
  college: "Asansol Engineering College",
  department: "Mechanical Engineering",
  phone: "+91-9876543277",
  email: "abhinav.gupta@example.com",
  image: "/abhinav.jpg",
  projectRole: "Frame Design Engineer",
  specialization: "SolidWorks, 3D Printing, Stress Analysis"
},
{
  name: "Nikita Roy",
  college: "IIT Dhanbad",
  department: "Electrical Engineering",
  phone: "+91-9876543288",
  email: "nikita.roy@example.com",
  image: "/nikita.jpg",
  projectRole: "Powertrain Analyst",
  specialization: "Battery Optimization, Regenerative Braking"
},
{
  name: "Arjun Chakraborty",
  college: "NIT Durgapur",
  department: "Computer Science and Engineering",
  phone: "+91-9876543299",
  email: "arjun.chakraborty@example.com",
  image: "/arjun.jpg",
  projectRole: "Backend Developer",
  specialization: "Django, PostgreSQL, API Architecture"
},
{
  name: "Tanya Mukherjee",
  college: "Asansol Engineering College",
  department: "Information Technology",
  phone: "+91-9876543300",
  email: "tanya.mukherjee@example.com",
  image: "/tanya.jpg",
  projectRole: "UI Designer",
  specialization: "Figma, Material UI, Accessibility Design"
},
{
  name: "Rishi Kumar",
  college: "Techno India University",
  department: "Computer Engineering",
  phone: "+91-9876543311",
  email: "rishi.kumar@example.com",
  image: "/rishi.jpg",
  projectRole: "AI/ML Engineer",
  specialization: "YOLO, TensorFlow, Image Recognition"
},
{
  name: "Pooja Dasgupta",
  college: "Asansol Engineering College",
  department: "Electronics and Communication",
  phone: "+91-9876543322",
  email: "pooja.dasgupta@example.com",
  image: "/pooja.jpg",
  projectRole: "Sensor Specialist",
  specialization: "GPS, Gyroscope, Ultrasonic Sensors"
},
{
  name: "Samarjit Pal",
  college: "Jadavpur University",
  department: "Mechanical Engineering",
  phone: "+91-9876543333",
  email: "samarjit.pal@example.com",
  image: "/samarjit.jpg",
  projectRole: "Testing Engineer",
  specialization: "Load Testing, Terrain Simulation, QA"
},
{
  name: "Ishita Ghosh",
  college: "NIT Rourkela",
  department: "Software Engineering",
  phone: "+91-9876543344",
  email: "ishita.ghosh@example.com",
  image: "/ishita.jpg",
  projectRole: "DevOps Engineer",
  specialization: "CI/CD Pipelines, Docker, GitHub Actions"
}


  ];



const TeamPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-20">
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Passionate engineers and designers working together to revolutionize electric mobility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-start space-x-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover flex-shrink-0 group-hover:ring-4 group-hover:ring-blue-400 transition-all duration-300"
              />
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-300">{member.name}</h3>
                <p className="text-blue-400">{member.projectRole}</p>
                <p className="text-sm text-gray-300 leading-snug">
                  <strong>College:</strong> {member.college}<br />
                  <strong>Department:</strong> {member.department}<br />
                  <strong>Specialization:</strong> {member.specialization}<br />
                  <strong>Phone:</strong> {member.phone}
                </p>
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
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderCurrentSection()}
      <Chatbot />
    </div>
  );
};

export default ElectricBikeWebsite;