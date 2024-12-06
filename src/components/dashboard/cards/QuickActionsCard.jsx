import React from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const QuickActionsCard = () => {
  const actions = [
    {
      name: 'Start Call',
      icon: PhoneIcon,
      color: 'text-blue-500',
      onClick: () => console.log('Start call')
    },
    {
      name: 'Send Email',
      icon: EnvelopeIcon,
      color: 'text-green-500',
      onClick: () => console.log('Send email')
    },
    {
      name: 'Schedule',
      icon: CalendarIcon,
      color: 'text-purple-500',
      onClick: () => console.log('Schedule')
    },
    {
      name: 'Chat',
      icon: ChatBubbleLeftRightIcon,
      color: 'text-pink-500',
      onClick: () => console.log('Chat')
    }
  ];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={action.onClick}
            className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <action.icon className={`h-6 w-6 ${action.color} mb-2`} />
            <span className="text-sm font-medium text-gray-600">{action.name}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickActionsCard;