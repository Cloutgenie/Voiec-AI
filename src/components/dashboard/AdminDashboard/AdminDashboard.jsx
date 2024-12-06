import React from 'react';
import CallMetrics from '../widgets/CallMetrics';
import RecentActivity from '../widgets/RecentActivity';
import CallControls from '../widgets/CallControls';

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
      <CallMetrics
        totalCalls="1,234"
        activeCalls="28"
        responseRate="98.2%"
        avgDuration="4m 32s"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={mockActivities} />
        <CallControls />
      </div>
    </div>
  );
};

export default AdminDashboard;