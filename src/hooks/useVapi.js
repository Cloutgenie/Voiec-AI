import { useState, useCallback, useEffect } from 'react';
import { VAPI_CONFIG, VAPI_UI_CONFIG } from '../config/vapi.config';

export const useVapi = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [error, setError] = useState(null);

  const initializeVapi = useCallback(async () => {
    if (window.vapiSDK || isInitialized) return;

    try {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
      script.defer = true;
      script.async = true;

      script.onload = () => {
        window.vapiSDK.run({
          apiKey: VAPI_CONFIG.apiKey,
          assistant: VAPI_CONFIG.assistantId,
          config: {
            ...VAPI_CONFIG.options,
            button: VAPI_UI_CONFIG.button,
            onOpen: () => setIsChatOpen(true),
            onClose: () => setIsChatOpen(false),
            theme: VAPI_UI_CONFIG.chat.theme
          },
        });
        setIsInitialized(true);
      };

      script.onerror = (err) => {
        setError(new Error('Failed to load Vapi SDK'));
        console.error('Failed to load Vapi SDK:', err);
      };

      document.body.appendChild(script);
    } catch (err) {
      setError(err);
      console.error('Failed to initialize Vapi:', err);
    }
  }, [isInitialized]);

  useEffect(() => {
    if (!isInitialized && !error) {
      initializeVapi();
    }
  }, [initializeVapi, isInitialized, error]);

  return {
    isInitialized,
    isChatOpen,
    setIsChatOpen,
    error
  };
};