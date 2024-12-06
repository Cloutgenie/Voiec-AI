import React from 'react';
import { motion } from 'framer-motion';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const InsightsCard = ({ insights }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <LightBulbIcon className="h-6 w-6 text-yellow-500 mr-2" />
        <h3 className="text-lg font-semibold">AI Insights</h3>
      </div>

      <div className="space-y-4">
        <div className="prose prose-sm">
          <p className="text-gray-600">{insights.insights}</p>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <span className="text-sm text-gray-500">
            Generated: {new Date(insights.timestamp).toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightsCard;