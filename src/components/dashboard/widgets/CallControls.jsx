import React from 'react';
import { Card, Title } from '@tremor/react';
import VapiContainer from '../../../features/vapi/VapiContainer';

const CallControls = () => {
  return (
    <Card>
      <Title>Call Controls</Title>
      <div className="mt-4">
        <VapiContainer />
      </div>
    </Card>
  );
};

export default CallControls;