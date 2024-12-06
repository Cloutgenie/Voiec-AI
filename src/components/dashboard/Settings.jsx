import React from 'react';
import SettingsLayout from './settings/SettingsLayout';
import VapiSettings from './settings/VapiSettings';

const Settings = () => {
  return (
    <SettingsLayout>
      <VapiSettings />
    </SettingsLayout>
  );
};

export default Settings;