import React, { useState } from 'react';
import { Send, MessageCircle, X } from 'lucide-react';


const Chatbot = ()=>{
    const [chatOpen, setChatOpen] = useState(false);
      const [chatMessages, setChatMessages] = useState([
        { type: 'bot', text: 'Hello! I\'m here to help you learn about our electric bike. Ask me anything!' }
      ]);
      const [chatInput, setChatInput] = useState('');
      const [isTyping, setIsTyping] = useState(false);
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
    return (
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
}

export default Chatbot;