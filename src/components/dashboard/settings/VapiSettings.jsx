import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { KeyIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import APIKeyInput from '../integration/APIKeyInput';
import AssistantsList from '../assistants/AssistantsList';
import { useVapiContext } from '../../../contexts/VapiContext';

const VapiSettings = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { initializeVapi } = useVapiContext();

  const handleApiKeyChange = async (value) => {
    setIsVerifying(true);
    try {
      // Update API key in local storage
      localStorage.setItem('VAPI_API_KEY', value);
      
      // Reinitialize Vapi with new key
      await initializeVapi();
      
      setIsVerified(true);
    } catch (error) {
      console.error('Failed to verify API key:', error);
      setIsVerified(false);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <KeyIcon className="h-6 w-6 text-purple-600 mr-2" />
          <h2 className="text-xl font-semibold">Vapi Integration</h2>
        </div>

        <div className="space-y-6">
          <div className="max-w-xl">
            <APIKeyInput
              label="Vapi API Key"
              value={localStorage.getItem('VAPI_API_KEY') || ''}
              onChange={(e) => handleApiKeyChange(e.target.value)}
              placeholder="Enter your Vapi API key"
            />
            {isVerifying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-gray-500"
              >
                Verifying API key...
              </motion.div>
            )}
            {isVerified && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 flex items-center text-sm text-green-600"
              >
                <CheckCircleIcon className="h-5 w-5 mr-1" />
                API key verified successfully
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {isVerified && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AssistantsList />
        </motion.div>
      )}
    </div>
  );
};

export default VapiSettings;