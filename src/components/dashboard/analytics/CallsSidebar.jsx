import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  ClockIcon, 
  ChartBarIcon,
  CalendarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const CallsSidebar = ({ selectedView, onViewChange }) => {
  const views = [
    {
      id: 'overview',
      name: 'Overview',
      icon: ChartBarIcon,
      description: 'Call volume and performance metrics'
    },
    {
      id: 'realtime',
      name: 'Real-time',
      icon: PhoneIcon,
      description: 'Active calls and live metrics'
    },
    {
      id: 'history',
      name: 'Call History',
      icon: ClockIcon,
      description: 'Detailed call logs and recordings'
    },
    {
      id: 'schedule',
      name: 'Schedule',
      icon: CalendarIcon,
      description: 'Upcoming scheduled calls'
    },
    {
      id: 'agents',
      name: 'Agents',
      icon: UserGroupIcon,
      description: 'Agent performance and availability'
    }
  ];

  return (
    <div className="w-64 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Call Analytics</h2>
      <nav className="space-y-2">
        {views.map((view) => {
          const isSelected = selectedView === view.id;
          return (
            <motion.button
              key={view.id}
              whileHover={{ x: 4 }}
              onClick={() => onViewChange(view.id)}
              className={`w-full flex items-start p-3 rounded-lg text-left transition-colors ${
                isSelected 
                  ? 'bg-purple-50 text-purple-700' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <view.icon className={`h-5 w-5 mr-3 ${
                isSelected ? 'text-purple-500' : 'text-gray-400'
              }`} />
              <div>
                <div className={`font-medium ${
                  isSelected ? 'text-purple-700' : 'text-gray-900'
                }`}>
                  {view.name}
                </div>
                <div className="text-xs text-gray-500">
                  {view.description}
                </div>
              </div>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
};

export default CallsSidebar;