import React from 'react';
import { useVapiContext } from '../../contexts/VapiContext';
import VapiButton from './VapiButton';
import VapiChat from './VapiChat';

const VapiWidget = () => {
  const { isChatOpen, setIsChatOpen, error } = useVapiContext();

  if (error) {
    console.error('Vapi initialization error:', error);
    return null;
  }

  return (
    <>
      <VapiButton />
      <VapiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default VapiWidget;