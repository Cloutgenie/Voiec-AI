import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';

const AssistantsHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">AI Assistants</h2>
        <p className="text-gray-600">Manage and configure your AI assistants</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <PlusIcon className="w-5 h-5 mr-2" />
        Create Assistant
      </motion.button>
    </div>
  );
};

export default AssistantsHeader;