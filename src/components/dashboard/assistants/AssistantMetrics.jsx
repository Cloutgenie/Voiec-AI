import React from 'react';
import { PhoneIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const AssistantMetrics = ({ metrics = {} }) => {
  const defaultMetrics = {
    totalCalls: '0',
    avgDuration: '0s',
    accuracy: '0%',
    ...metrics
  };

  const metricsData = [
    {
      icon: PhoneIcon,
      value: defaultMetrics.totalCalls,
      label: 'Calls'
    },
    {
      icon: ClockIcon,
      value: defaultMetrics.avgDuration,
      label: 'Avg Duration'
    },
    {
      icon: ChartBarIcon,
      value: defaultMetrics.accuracy,
      label: 'Accuracy'
    }
  ];

  return (
    <div className="mt-4 grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
      {metricsData.map((metric, index) => (
        <div key={index} className="text-center">
          <metric.icon className="h-5 w-5 mx-auto text-gray-400" />
          <div className="mt-1">
            <div className="text-sm font-semibold text-gray-900">{metric.value}</div>
            <div className="text-xs text-gray-500">{metric.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssistantMetrics;