import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VAPI_UI_CONFIG } from '../../config/vapi.config';
import { XMarkIcon, MicrophoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const VapiChat = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message through Vapi SDK
      setMessage('');
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Handle voice recording through Vapi SDK
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col"
        >
          {/* Chat Header */}
          <div 
            className="p-4 rounded-t-lg flex items-center justify-between"
            style={{ backgroundColor: VAPI_UI_CONFIG.chat.theme.primary }}
          >
            <div className="flex items-center space-x-3">
              {VAPI_UI_CONFIG.chat.header.showAvatar && (
                <img src="/voice.svg" alt="AI Assistant" className="w-8 h-8" />
              )}
              <div>
                <h3 className="text-white font-semibold">
                  {VAPI_UI_CONFIG.chat.header.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {VAPI_UI_CONFIG.chat.header.subtitle}
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Messages will be rendered here */}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={toggleRecording}
                className={`p-2 rounded-full ${
                  isRecording ? 'bg-red-500' : 'bg-gray-100'
                } hover:bg-opacity-80`}
              >
                <MicrophoneIcon className={`w-5 h-5 ${
                  isRecording ? 'text-white' : 'text-gray-600'
                }`} />
              </button>
              <button
                onClick={handleSend}
                className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VapiChat;