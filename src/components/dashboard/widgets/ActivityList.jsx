import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const ActivityList = ({ activities }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-between items-start p-4 rounded-lg hover:bg-gray-50"
          >
            <div>
              <p className="font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.description}</p>
            </div>
            <span className="text-sm text-gray-500">
              {format(new Date(activity.timestamp), 'MMM d, h:mm a')}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;