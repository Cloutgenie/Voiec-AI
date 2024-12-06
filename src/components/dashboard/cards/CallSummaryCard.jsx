import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const CallSummaryCard = ({ summary }) => {
  const sentimentColors = {
    positive: 'text-green-500',
    negative: 'text-red-500',
    neutral: 'text-gray-500'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <ChatBubbleLeftRightIcon className="h-6 w-6 text-purple-500 mr-2" />
        <h3 className="text-lg font-semibold">Call Summary</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-gray-600">{summary.summary}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className={`font-medium ${sentimentColors[summary.sentiment]}`}>
            {summary.sentiment.charAt(0).toUpperCase() + summary.sentiment.slice(1)} Sentiment
          </span>
          <span className="text-sm text-gray-500">
            {new Date(summary.timestamp).toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CallSummaryCard;