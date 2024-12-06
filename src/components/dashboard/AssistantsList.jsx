import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  PencilIcon, 
  TrashIcon 
} from '@heroicons/react/24/outline';

const mockAssistants = [
  {
    id: '1',
    name: 'Customer Support',
    description: 'Handles general customer inquiries and support tickets',
    status: 'active',
    type: 'support'
  },
  {
    id: '2',
    name: 'Sales Assistant',
    description: 'Assists with product information and sales inquiries',
    status: 'active',
    type: 'sales'
  },
  {
    id: '3',
    name: 'Technical Support',
    description: 'Provides technical troubleshooting and guidance',
    status: 'inactive',
    type: 'technical'
  }
];

const AssistantsList = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">AI Assistants</h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Create Assistant
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAssistants.map((assistant) => (
          <motion.div
            key={assistant.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-purple-600" />
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900">{assistant.name}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    assistant.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {assistant.status}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-500">
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-red-500">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">{assistant.description}</p>
            <div className="mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200"
              >
                Configure
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AssistantsList;