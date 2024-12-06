import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const MessageSuggestionCard = ({ suggestion, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-purple-50 p-4 rounded-lg border border-purple-100"
    >
      <div className="flex justify-between items-start gap-4">
        <p className="text-gray-800">{suggestion.text}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onSelect}
          className="flex-shrink-0 p-2 text-purple-600 hover:bg-purple-100 rounded-full transition-colors"
        >
          <CheckIcon className="h-5 w-5" />
        </motion.button>
      </div>
      <div className="mt-2 text-right">
        <span className="text-sm text-gray-500">
          {new Date(suggestion.timestamp).toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
};

export default MessageSuggestionCard;