import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon as CogIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import VapiWidget from '../vapi/VapiWidget';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
    { name: 'Staff View', icon: UserGroupIcon, href: '/staff-dashboard' },
    { name: 'Analytics', icon: ChartBarIcon, href: '/analytics' },
    { name: 'Settings', icon: CogIcon, href: '/settings' }
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Rest of your existing DashboardLayout code */}
      {children}
      <VapiWidget />
    </div>
  );
};

export default DashboardLayout;