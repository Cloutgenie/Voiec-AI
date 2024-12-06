import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const IntegrationStatus = ({ status, lastChecked }) => {
  const statusConfig = {
    connected: {
      icon: CheckCircleIcon,
      text: 'Connected',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    disconnected: {
      icon: XCircleIcon,
      text: 'Disconnected',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`${config.bgColor} p-4 rounded-lg flex items-center justify-between`}>
      <div className="flex items-center space-x-2">
        <Icon className={`h-5 w-5 ${config.color}`} />
        <span className={`font-medium ${config.color}`}>{config.text}</span>
      </div>
      {lastChecked && (
        <span className="text-sm text-gray-500">
          Last checked: {lastChecked}
        </span>
      )}
    </div>
  );
};

export default IntegrationStatus;