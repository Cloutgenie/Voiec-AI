import React, { useState } from 'react';
import { motion } from 'framer-motion';
import APIKeyInput from '../integration/APIKeyInput';
import IntegrationStatus from '../integration/IntegrationStatus';
import {
  CreditCardIcon,
  EnvelopeIcon,
  CalendarIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const IntegrationsSettings = () => {
  const [integrations, setIntegrations] = useState({
    stripe: {
      apiKey: '',
      status: 'disconnected'
    },
    email: {
      apiKey: '',
      status: 'disconnected'
    },
    calendar: {
      apiKey: '',
      status: 'disconnected'
    },
    vapi: {
      apiKey: '',
      status: 'disconnected'
    },
    twilio: {
      apiKey: '',
      status: 'disconnected'
    }
  });

  const handleApiKeyChange = (integration, value) => {
    setIntegrations(prev => ({
      ...prev,
      [integration]: {
        ...prev[integration],
        apiKey: value,
        status: value ? 'connected' : 'disconnected'
      }
    }));
  };

  const integrationConfigs = [
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Payment processing and subscription management',
      icon: CreditCardIcon,
      docsUrl: 'https://stripe.com/docs/api'
    },
    {
      id: 'email',
      name: 'Email Service',
      description: 'Transactional and marketing email delivery',
      icon: EnvelopeIcon,
      docsUrl: '#'
    },
    {
      id: 'calendar',
      name: 'Google Calendar',
      description: 'Calendar integration for scheduling',
      icon: CalendarIcon,
      docsUrl: 'https://developers.google.com/calendar'
    },
    {
      id: 'vapi',
      name: 'Vapi.ai',
      description: 'Voice AI and conversation management',
      icon: ChatBubbleLeftRightIcon,
      docsUrl: 'https://vapi.ai/docs'
    },
    {
      id: 'twilio',
      name: 'Twilio',
      description: 'Phone and SMS communication',
      icon: PhoneIcon,
      docsUrl: 'https://www.twilio.com/docs'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">API Integrations</h2>
        <p className="text-gray-600 mb-6">
          Connect your services to enable full functionality
        </p>

        <div className="space-y-6">
          {integrationConfigs.map((integration) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <integration.icon className="h-8 w-8 text-gray-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {integration.description}
                    </p>
                  </div>
                </div>
                <a
                  href={integration.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-600 hover:text-purple-700"
                >
                  View Docs
                </a>
              </div>

              <div className="space-y-4">
                <APIKeyInput
                  label="API Key"
                  value={integrations[integration.id].apiKey}
                  onChange={(e) => handleApiKeyChange(integration.id, e.target.value)}
                  placeholder={`Enter your ${integration.name} API key`}
                />
                <IntegrationStatus
                  status={integrations[integration.id].status}
                  lastChecked={integrations[integration.id].status === 'connected' ? 'Just now' : null}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSettings;