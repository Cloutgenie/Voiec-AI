import React from 'react';
import MetricsCard from '../cards/MetricsCard';

const metrics = [
  {
    label: 'System Health',
    value: '98%',
    percentage: 98,
    color: 'bg-green-500'
  },
  {
    label: 'API Response Time',
    value: '145ms',
    percentage: 92,
    color: 'bg-blue-500'
  },
  {
    label: 'Voice Recognition',
    value: '99.1%',
    percentage: 99,
    color: 'bg-purple-500'
  },
  {
    label: 'Customer Satisfaction',
    value: '94%',
    percentage: 94,
    color: 'bg-indigo-500'
  }
];

const PerformanceMetrics = () => {
  return (
    <MetricsCard title="System Performance" metrics={metrics} />
  );
};

export default PerformanceMetrics;