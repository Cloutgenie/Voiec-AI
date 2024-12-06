import React from 'react';
import { Card, Metric, Text, Flex, ProgressBar } from '@tremor/react';

const CallMetrics = ({ totalCalls, activeCalls, avgDuration, responseRate }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <Text>Total Calls</Text>
        <Metric>{totalCalls}</Metric>
        <Flex className="mt-4">
          <Text>85% increase</Text>
          <Text>+12.3%</Text>
        </Flex>
        <ProgressBar value={85} className="mt-2" />
      </Card>

      <Card>
        <Text>Active Calls</Text>
        <Metric>{activeCalls}</Metric>
        <Flex className="mt-4">
          <Text>72% capacity</Text>
          <Text>+8.1%</Text>
        </Flex>
        <ProgressBar value={72} className="mt-2" />
      </Card>

      <Card>
        <Text>Response Rate</Text>
        <Metric>{responseRate}</Metric>
        <Flex className="mt-4">
          <Text>98% success</Text>
          <Text>+2.5%</Text>
        </Flex>
        <ProgressBar value={98} className="mt-2" />
      </Card>

      <Card>
        <Text>Avg. Duration</Text>
        <Metric>{avgDuration}</Metric>
        <Flex className="mt-4">
          <Text>78% optimal</Text>
          <Text>-1.2%</Text>
        </Flex>
        <ProgressBar value={78} className="mt-2" />
      </Card>
    </div>
  );
};

export default CallMetrics;