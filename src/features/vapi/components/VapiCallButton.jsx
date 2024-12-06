import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, PhoneXMarkIcon } from '@heroicons/react/24/outline';

const VapiCallButton = ({ isConnected, isConnecting, onStart, onEnd }) => {
  if (isConnected) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onEnd}
        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        <PhoneXMarkIcon className="w-5 h-5 mr-2" />
        End Call
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onStart}
      disabled={isConnecting}
      className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
    >
      <PhoneIcon className="w-5 h-5 mr-2" />
      {isConnecting ? 'Connecting...' : 'Start Call'}
    </motion.button>
  );
};

export default VapiCallButton;