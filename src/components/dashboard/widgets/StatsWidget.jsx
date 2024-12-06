import React from 'react';
import { Card, Metric, Text, Flex, ProgressBar } from '@tremor/react';

const StatsWidget = ({ title, metric, progress, trend }) => {
  return (
    <Card className="max-w-xs mx-auto">
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
      <Flex className="mt-4">
        <Text>{`${progress}% completed`}</Text>
        <Text>{trend}</Text>
      </Flex>
      <ProgressBar value={progress} className="mt-2" />
    </Card>
  );
};

export default StatsWidget;