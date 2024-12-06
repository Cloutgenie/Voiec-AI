import React from 'react';
import { motion } from 'framer-motion';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const AssistantActions = ({ assistant }) => {
  return (
    <div className="flex space-x-2">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-gray-400 hover:text-gray-500"
      >
        <PencilIcon className="h-5 w-5" />
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-gray-400 hover:text-red-500"
      >
        <TrashIcon className="h-5 w-5" />
      </motion.button>
    </div>
  );
};

export default AssistantActions;