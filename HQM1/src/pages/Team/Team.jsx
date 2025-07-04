 
 import React, { useState, useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
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
export default TeamPage;