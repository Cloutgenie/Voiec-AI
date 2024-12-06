import React from 'react';
import { motion } from 'framer-motion';

const VapiCallStatus = ({ isConnected, assistantIsSpeaking, volumeLevel }) => {
  if (!isConnected) return null;

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <motion.div
          animate={{
            scale: assistantIsSpeaking ? [1, 1.2, 1] : 1,
          }}
          transition={{ repeat: Infinity, duration: 1 }}
          className={`w-3 h-3 rounded-full ${
            assistantIsSpeaking ? 'bg-green-500' : 'bg-gray-500'
          }`}
        />
        <span className="ml-2 text-sm text-gray-600">
          {assistantIsSpeaking ? 'Assistant is speaking' : 'Assistant is listening'}
        </span>
      </div>
      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-purple-500"
          animate={{ width: `${volumeLevel * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
};

export default VapiCallStatus;