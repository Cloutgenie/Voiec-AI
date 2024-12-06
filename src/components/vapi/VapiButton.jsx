import React from 'react';
import { motion } from 'framer-motion';
import { useVapiContext } from '../../contexts/VapiContext';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { VAPI_UI_CONFIG } from '../../config/vapi.config';

const VapiButton = () => {
  const { isChatOpen, setIsChatOpen } = useVapiContext();
  const buttonConfig = VAPI_UI_CONFIG.button;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsChatOpen(!isChatOpen)}
      style={{
        position: 'fixed',
        bottom: buttonConfig.offset,
        right: buttonConfig.offset,
      }}
      className={`flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors`}
    >
      <ChatBubbleLeftRightIcon className="w-5 h-5" />
      <span className="font-medium">Chat with AI</span>
    </motion.button>
  );
};

export default VapiButton;