import { useState, useCallback, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { VAPI_CONFIG } from '../config/vapi.config';

export const useVapiSDK = () => {
  const [vapi, setVapi] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState(null);

  const initialize = useCallback(async () => {
    if (vapi || isInitialized) return;

    try {
      const vapiInstance = new Vapi(VAPI_CONFIG.apiKey);
      
      // Configure event listeners
      vapiInstance.on('call-start', () => {
        console.log('Call started');
      });

      vapiInstance.on('call-end', () => {
        console.log('Call ended');
      });

      vapiInstance.on('error', (err) => {
        console.error('Vapi error:', err);
        setError(err);
      });

      setVapi(vapiInstance);
      setIsInitialized(true);
    } catch (err) {
      console.error('Failed to initialize Vapi:', err);
      setError(err);
    }
  }, [vapi, isInitialized]);

  const startCall = useCallback(async () => {
    if (!vapi) return;

    try {
      await vapi.start(VAPI_CONFIG.assistantId, {
        transcriber: VAPI_CONFIG.options.transcriber,
        model: VAPI_CONFIG.options.model,
        voice: VAPI_CONFIG.options.voice
      });
    } catch (err) {
      console.error('Failed to start call:', err);
      setError(err);
    }
  }, [vapi]);

  const stopCall = useCallback(() => {
    if (!vapi) return;
    vapi.stop();
  }, [vapi]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return {
    vapi,
    isInitialized,
    error,
    startCall,
    stopCall
  };
};