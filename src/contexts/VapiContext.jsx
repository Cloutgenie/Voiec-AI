import React, { createContext, useContext, useState, useCallback } from 'react';
import { VAPI_CONFIG } from '../config/vapi.config';
import vapiService from '../services/vapiService';

const VapiContext = createContext(null);

export const VapiProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [error, setError] = useState(null);

  const initializeVapi = useCallback(async () => {
    try {
      // Get API key from local storage
      const apiKey = localStorage.getItem('VAPI_API_KEY');
      if (!apiKey) {
        throw new Error('No API key found');
      }

      // Update vapiService with new API key
      await vapiService.updateApiKey(apiKey);

      // Test the connection by fetching assistants
      await vapiService.getAssistants();

      setIsInitialized(true);
      setError(null);
    } catch (err) {
      setError(err);
      setIsInitialized(false);
      throw err;
    }
  }, []);

  const value = {
    isInitialized,
    isChatOpen,
    setIsChatOpen,
    error,
    initializeVapi
  };

  return (
    <VapiContext.Provider value={value}>
      {children}
    </VapiContext.Provider>
  );
};

export const useVapiContext = () => {
  const context = useContext(VapiContext);
  if (!context) {
    throw new Error('useVapiContext must be used within a VapiProvider');
  }
  return context;
};