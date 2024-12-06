import React from 'react';
import AnalyticsCard from './cards/AnalyticsCard';

const Analytics = () => {
  const callData = [
    { name: 'Jan', calls: 400 },
    { name: 'Feb', calls: 300 },
    { name: 'Mar', calls: 600 },
    { name: 'Apr', calls: 800 },
    { name: 'May', calls: 700 }
  ];

  const satisfactionData = [
    { name: 'Jan', score: 4.2 },
    { name: 'Feb', score: 4.4 },
    { name: 'Mar', score: 4.6 },
    { name: 'Apr', score: 4.8 },
    { name: 'May', score: 4.7 }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Monitor your Voice AI platform's performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsCard
          title="Call Volume"
          data={callData}
          dataKey="calls"
          color="#6366f1"
        />
        <AnalyticsCard
          title="Customer Satisfaction"
          data={satisfactionData}
          dataKey="score"
          color="#8b5cf6"
        />
      </div>
    </div>
  );
};

export default Analytics;