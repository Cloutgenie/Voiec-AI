import React from 'react';
import { Card, Title, AreaChart } from '@tremor/react';

const mockData = [
  { date: '2024-01-01', calls: 45, duration: 235, success: 42 },
  { date: '2024-01-02', calls: 52, duration: 268, success: 48 },
  { date: '2024-01-03', calls: 38, duration: 194, success: 35 },
  { date: '2024-01-04', calls: 63, duration: 285, success: 58 },
  { date: '2024-01-05', calls: 51, duration: 246, success: 47 }
];

const CallsOverview = () => {
  return (
    <div className="space-y-6">
      <Card>
        <Title>Call Volume Trends</Title>
        <AreaChart
          className="h-72 mt-4"
          data={mockData}
          index="date"
          categories={["calls", "success"]}
          colors={["purple", "green"]}
        />
      </Card>
    </div>
  );
};

export default CallsOverview;