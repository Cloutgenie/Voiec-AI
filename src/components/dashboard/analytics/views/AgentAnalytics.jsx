import React from 'react';
import { Card, Title, DonutChart, Legend } from '@tremor/react';

const mockAgentData = [
  { name: 'Customer Support AI', calls: 234 },
  { name: 'Sales AI', calls: 189 },
  { name: 'Technical Support AI', calls: 156 }
];

const AgentAnalytics = () => {
  return (
    <Card>
      <Title>Call Distribution by Agent</Title>
      <DonutChart
        className="mt-6"
        data={mockAgentData}
        category="calls"
        index="name"
        colors={["purple", "indigo", "blue"]}
      />
      <Legend
        className="mt-6"
        categories={mockAgentData.map(item => item.name)}
        colors={["purple", "indigo", "blue"]}
      />
    </Card>
  );
};

export default AgentAnalytics;