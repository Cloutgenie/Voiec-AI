import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { MockUserButton } from '../../auth/MockAuth';

const DashboardHeader = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.firstName || 'User'}</h1>
            <p className="text-sm text-gray-500">Manage your Voice AI platform</p>
          </div>
          <MockUserButton />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;