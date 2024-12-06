import React from 'react';
import StatCard from '../cards/StatCard';
import { PhoneIcon, UserGroupIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    icon: PhoneIcon,
    title: 'Active Calls',
    value: '28',
    subtext: '+12% from last hour',
    color: 'blue'
  },
  {
    icon: UserGroupIcon,
    title: 'Total Users',
    value: '1,429',
    subtext: '+8% from last week',
    color: 'green'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Revenue',
    value: '$12,847',
    subtext: 'This month',
    color: 'purple'
  },
  {
    icon: ChartBarIcon,
    title: 'AI Accuracy',
    value: '97.8%',
    subtext: '+2.1% improvement',
    color: 'indigo'
  }
];

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsOverview;