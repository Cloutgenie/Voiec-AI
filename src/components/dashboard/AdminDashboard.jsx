import React from 'react';
import { 
  PhoneIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';
import StatsCard from './widgets/StatsCard';
import ActivityList from './widgets/ActivityList';

const mockStats = [
  {
    title: 'Active Calls',
    value: '28',
    icon: PhoneIcon,
    trend: '+12%',
    color: 'blue'
  },
  {
    title: 'Total Users',
    value: '1,429',
    icon: UserGroupIcon,
    trend: '+8%',
    color: 'green'
  },
  {
    title: 'Revenue',
    value: '$12,847',
    icon: CurrencyDollarIcon,
    trend: '+15%',
    color: 'purple'
  },
  {
    title: 'AI Accuracy',
    value: '97.8%',
    icon: ChartBarIcon,
    trend: '+2.1%',
    color: 'indigo'
  }
];

const mockActivities = [
  {
    title: 'New call completed',
    description: 'Customer inquiry handled successfully',
    timestamp: new Date().toISOString()
  },
  {
    title: 'System update',
    description: 'Voice recognition model updated',
    timestamp: new Date(Date.now() - 3600000).toISOString()
  },
  {
    title: 'Performance alert',
    description: 'Response time improved by 15%',
    timestamp: new Date(Date.now() - 7200000).toISOString()
  }
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityList activities={mockActivities} />
      </div>
    </div>
  );
};

export default AdminDashboard;