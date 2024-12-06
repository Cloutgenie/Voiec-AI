import React, { useEffect } from 'react';
import { useVapiCall } from './hooks/useVapiCall';
import VapiCallButton from './components/VapiCallButton';
import VapiCallStatus from './components/VapiCallStatus';

const VapiContainer = () => {
  const {
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
  } = useVapiCall();

  useEffect(() => {
    const vapi = window.vapiSDK;
    if (!vapi) return;

    vapi.on("call-start", () => setIsConnected(true));
    vapi.on("call-end", () => setIsConnected(false));
    vapi.on("speech-start", () => setAssistantIsSpeaking(true));
    vapi.on("speech-end", () => setAssistantIsSpeaking(false));
    vapi.on("volume-level", (level) => setVolumeLevel(level));

    return () => {
      vapi.off("call-start");
      vapi.off("call-end");
      vapi.off("speech-start");
      vapi.off("speech-end");
      vapi.off("volume-level");
    };
  }, [setIsConnected, setAssistantIsSpeaking, setVolumeLevel]);

  if (error) {
    return (
      <div className="text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <VapiCallButton
        isConnected={isConnected}
        isConnecting={isConnecting}
        onStart={startCall}
        onEnd={endCall}
      />
      <VapiCallStatus
        isConnected={isConnected}
        assistantIsSpeaking={assistantIsSpeaking}
        volumeLevel={volumeLevel}
      />
    </div>
  );
};

export default VapiContainer;