import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, ClockIcon, ChatBubbleLeftIcon as ChatIcon } from '@heroicons/react/24/outline';

const StaffDashboard = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Staff Dashboard</h1>
        <p className="text-gray-600">Monitor and manage your daily operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <PhoneIcon className="h-6 w-6 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold">Active Calls</h3>
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-500">4 in queue</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <ClockIcon className="h-6 w-6 text-green-500 mr-2" />
            <h3 className="text-lg font-semibold">Avg. Response Time</h3>
          </div>
          <p className="text-3xl font-bold">2.5m</p>
          <p className="text-sm text-gray-500">-30s from yesterday</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            <ChatIcon className="h-6 w-6 text-purple-500 mr-2" />
            <h3 className="text-lg font-semibold">AI Interactions</h3>
          </div>
          <p className="text-3xl font-bold">89</p>
          <p className="text-sm text-gray-500">Today's total</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold mb-4">Recent Interactions</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Call #{1000 + index}</p>
                  <p className="text-sm text-gray-500">Customer inquiry handled</p>
                </div>
                <span className="text-sm text-gray-500">2m ago</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Resolution Rate</span>
                <span className="font-semibold">92%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Customer Satisfaction</span>
                <span className="font-semibold">4.8/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StaffDashboard;