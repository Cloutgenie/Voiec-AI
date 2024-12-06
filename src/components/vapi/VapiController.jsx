import React from 'react';
import { motion } from 'framer-motion';
import { useVapiSDK } from '../../hooks/useVapiSDK';
import { PhoneIcon, PhoneXMarkIcon } from '@heroicons/react/24/outline';

const VapiController = () => {
  const { isInitialized, error, startCall, stopCall } = useVapiSDK();

  if (error) {
    return (
      <div className="text-red-500">
        Failed to initialize Vapi: {error.message}
      </div>
    );
  }

  if (!isInitialized) {
    return (
      <div className="text-gray-500">
        Initializing Vapi...
      </div>
    );
  }

  return (
    <div className="flex space-x-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={startCall}
        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        <PhoneIcon className="w-5 h-5 mr-2" />
        Start Call
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={stopCall}
        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        <PhoneXMarkIcon className="w-5 h-5 mr-2" />
        End Call
      </motion.button>
    </div>
  );
};

export default VapiController;