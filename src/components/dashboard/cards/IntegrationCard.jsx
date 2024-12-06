import React from 'react';
import { motion } from 'framer-motion';

const IntegrationCard = ({ integration }) => {
  const { name, description, status, icon: Icon, setupUrl, lastChecked } = integration;
  
  const statusColors = {
    connected: 'bg-green-100 text-green-800',
    disconnected: 'bg-red-100 text-red-800',
    pending: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-gray-600 mr-3" />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className={`px-2 py-1 rounded-full text-xs ${statusColors[status]}`}>
            {status}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      {lastChecked && (
        <p className="text-xs text-gray-500 mb-4">Last checked: {lastChecked}</p>
      )}
      
      <button
        className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        onClick={() => window.location.href = setupUrl}
      >
        {status === 'connected' ? 'Manage' : 'Connect'}
      </button>
    </motion.div>
  );
};

export default IntegrationCard;