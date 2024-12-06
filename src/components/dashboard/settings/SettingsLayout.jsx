import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cog6ToothIcon as CogIcon,
  KeyIcon,
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const SettingsLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('integrations');

  const tabs = [
    { id: 'integrations', name: 'Integrations', icon: KeyIcon },
    { id: 'profile', name: 'Profile', icon: UserCircleIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <CogIcon className="h-8 w-8 text-gray-600" />
          Settings
        </h1>
        <p className="text-gray-600">Manage your account and application settings</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ x: 4 }}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  activeTab === tab.id
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-3" />
                {tab.name}
              </motion.button>
            ))}
          </nav>
        </div>

        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;