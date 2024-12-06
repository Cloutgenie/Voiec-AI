import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, title, value, subtext, color = 'blue' }) => {
  const colorClasses = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
    red: 'text-red-500'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <Icon className={`h-6 w-6 ${colorClasses[color]} mr-2`} />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{subtext}</p>
    </motion.div>
  );
};

export default StatCard;