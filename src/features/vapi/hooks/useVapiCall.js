import { useState, useCallback } from 'react';
import { VAPI_CONFIG } from '../config/vapi.config';

export const useVapiCall = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [error, setError] = useState(null);

  const startCall = useCallback(async () => {
    setIsConnecting(true);
    setError(null);

    try {
      const vapi = window.vapiSDK;
      await vapi.start({
        ...VAPI_CONFIG.options,
        name: "Voice AI Assistant",
        firstMessage: "Hello! How can I assist you today?",
      });
    } catch (err) {
      setError(err);
      setIsConnecting(false);
    }
  }, []);

  const endCall = useCallback(() => {
    const vapi = window.vapiSDK;
    if (vapi) {
      vapi.stop();
      setIsConnected(false);
    }
  }, []);

  return {
    isConnecting,
    isConnected,
    assistantIsSpeaking,
    volumeLevel,
    error,
    startCall,
    endCall,
    setIsConnected,
    setAssistantIsSpeaking,
    setVolumeLevel
  };
};