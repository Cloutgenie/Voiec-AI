import React, { useState } from 'react';
import { motion } from 'framer-motion';
import vapiService from '../../services/vapiService';
import { PhoneIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const VapiConfig = () => {
  const [config, setConfig] = useState({
    greeting: "Hello! How can I help you today?",
    voiceId: "r52da2535a",
    maxDuration: 600,
    silenceTimeout: 30
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      await vapiService.createAssistant(config);
      setStatus({ loading: false, error: null, success: true });
    } catch (error) {
      setStatus({ loading: false, error: error.message, success: false });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <PhoneIcon className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl font-semibold">Vapi.ai Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Greeting Message
          </label>
          <input
            type="text"
            name="greeting"
            value={config.greeting}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Voice ID
          </label>
          <input
            type="text"
            name="voiceId"
            value={config.voiceId}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Duration (seconds)
            </label>
            <input
              type="number"
              name="maxDuration"
              value={config.maxDuration}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Silence Timeout (seconds)
            </label>
            <input
              type="number"
              name="silenceTimeout"
              value={config.silenceTimeout}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {status.error && (
          <div className="text-red-500 text-sm">{status.error}</div>
        )}

        {status.success && (
          <div className="text-green-500 text-sm">Configuration saved successfully!</div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status.loading}
          className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status.loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              Saving...
            </>
          ) : (
            <>
              <Cog6ToothIcon className="h-5 w-5" />
              Save Configuration
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default VapiConfig;