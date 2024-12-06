import React from 'react';
import IntegrationCard from '../cards/IntegrationCard';
import { CreditCardIcon, EnvelopeIcon, CalendarIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const integrations = [
  {
    name: 'Stripe',
    description: 'Payment processing integration',
    status: 'connected',
    icon: CreditCardIcon,
    setupUrl: '/settings#integrations',
    lastChecked: '2 minutes ago'
  },
  {
    name: 'Email',
    description: 'Email notifications',
    status: 'connected',
    icon: EnvelopeIcon,
    setupUrl: '/settings#integrations',
    lastChecked: '5 minutes ago'
  },
  {
    name: 'Calendar',
    description: 'Schedule management',
    status: 'connected',
    icon: CalendarIcon,
    setupUrl: '/settings#integrations',
    lastChecked: '10 minutes ago'
  },
  {
    name: 'Twilio',
    description: 'Voice and SMS services',
    status: 'connected',
    icon: PhoneIcon,
    setupUrl: '/settings#integrations',
    lastChecked: '15 minutes ago'
  },
  {
    name: 'Vapi.ai',
    description: 'Voice AI processing',
    status: 'connected',
    icon: ChatBubbleLeftRightIcon,
    setupUrl: '/settings#integrations',
    lastChecked: '1 minute ago'
  }
];

const IntegrationsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {integrations.map((integration, index) => (
        <IntegrationCard key={index} integration={integration} />
      ))}
    </div>
  );
};

export default IntegrationsOverview;