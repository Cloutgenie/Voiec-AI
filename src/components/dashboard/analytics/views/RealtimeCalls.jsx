import React from 'react';
import { Card, Title, BarList, Flex, Text } from '@tremor/react';

const mockActiveCalls = [
  { name: "Customer Support #1", value: 245, status: "In Progress" },
  { name: "Sales Inquiry #3", value: 156, status: "In Progress" },
  { name: "Technical Support #2", value: 432, status: "In Progress" }
];

const RealtimeCalls = () => {
  return (
    <Card>
      <Title>Active Calls</Title>
      <Flex className="mt-4">
        <Text>Call</Text>
        <Text>Duration (seconds)</Text>
      </Flex>
      <BarList data={mockActiveCalls} className="mt-2" />
    </Card>
  );
};

export default RealtimeCalls;