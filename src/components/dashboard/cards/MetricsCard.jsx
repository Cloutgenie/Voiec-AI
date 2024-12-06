import React from 'react';
import { motion } from 'framer-motion';

const MetricsCard = ({ title, metrics }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span>{metric.label}</span>
              <span className="font-semibold">{metric.value}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className={`h-2 ${metric.color} rounded-full`}
                style={{ width: `${metric.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MetricsCard;