import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Zap, Battery, Shield, Cpu } from 'lucide-react';
import FuturisticBikeModel from '../../components/ui/BikeModel/Bikemode'
const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { value: "50+", label: "Miles Range", icon: Battery, color: "from-blue-400 to-cyan-400" },
    { value: "28", label: "MPH Top Speed", icon: Zap, color: "from-purple-400 to-pink-400" },
    { value: "4-6", label: "Hours Charge", icon: Shield, color: "from-green-400 to-emerald-400" },
    { value: "AI", label: "Smart Control", icon: Cpu, color: "from-orange-400 to-red-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(139, 92, 246, 0.05) 50%, 
            transparent 100%)`
        }}
      />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div 
              ref={heroRef}
              className="space-y-8 transform transition-all duration-1000"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: Math.max(0, 1 - scrollY * 0.002)
              }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-medium">Revolutionary Technology</span>
                </div>
                
                <h1 className="text-7xl lg:text-8xl font-bold leading-tight">
                  The Future of
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block animate-pulse">
                    Electric Mobility
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Experience the perfect blend of power, efficiency, and style with our revolutionary electric bike. 
                  Designed for the modern rider who demands performance without compromise.
                </p>
              </div>
              
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="group bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, rgba(31, 41, 55, 0.3), rgba(17, 24, 39, 0.5))`,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Icon className={`w-6 h-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.color} animate-pulse`} />
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg hover:shadow-blue-500/25">
                  <span>Explore Features</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-transparent border-2 border-gray-600 hover:border-gray-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 backdrop-blur-sm hover:bg-white/5">
                  <span>Watch Demo</span>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 animate-pulse" />
                </button>
              </div>
            </div>

            {/* Right 3D Bike with Enhanced Container */}
            <div 
              className="flex justify-center items-center transform transition-all duration-1000"
              style={{
                transform: `translateY(${scrollY * -0.05}px) translateX(${mousePosition.x * 0.02 - 1}px)`,
                opacity: Math.max(0, 1 - scrollY * 0.001)
              }}
            >
              <div className="relative">
                {/* Floating Elements Around Bike */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -right-20 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
                
                <FuturisticBikeModel />
                
                {/* Floating Tech Labels */}
                <div className="absolute top-10 left-0 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-500/30 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <div className="text-xs text-blue-400 font-semibold">Neural AI</div>
                </div>
                
                <div className="absolute bottom-20 right-0 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/30 animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <div className="text-xs text-green-400 font-semibold">Eco Mode</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
        <div className="text-sm text-gray-400">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
export default HomePage