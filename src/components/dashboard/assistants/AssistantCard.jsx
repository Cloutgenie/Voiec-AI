import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import AssistantStatus from './AssistantStatus';
import AssistantActions from './AssistantActions';
import AssistantMetrics from './AssistantMetrics';

const AssistantCard = ({ assistant = {}, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this assistant?')) {
      setIsDeleting(true);
      try {
        await onDelete();
      } catch (error) {
        console.error('Failed to delete assistant:', error);
        alert('Failed to delete assistant. Please try again.');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white p-6 rounded-lg shadow-md ${isDeleting ? 'opacity-50' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <ChatBubbleLeftRightIcon className="h-8 w-8 text-purple-600" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">{assistant.name || 'Unnamed Assistant'}</h3>
            <AssistantStatus status={assistant.status} />
          </div>
        </div>
        <AssistantActions 
          onDelete={handleDelete}
          disabled={isDeleting}
        />
      </div>
      
      <p className="mt-2 text-sm text-gray-500">
        {assistant.description || 'No description available'}
      </p>
      
      <AssistantMetrics metrics={assistant.metrics} />
      
      <div className="mt-4 flex space-x-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isDeleting}
          className="flex-1 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 disabled:opacity-50"
        >
          Configure
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isDeleting}
          className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
        >
          View Calls
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AssistantCard;