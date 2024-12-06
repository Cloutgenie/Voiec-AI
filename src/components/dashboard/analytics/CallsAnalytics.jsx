import React, { useState } from 'react';
import CallsSidebar from './CallsSidebar';
import CallsOverview from './views/CallsOverview';
import RealtimeCalls from './views/RealtimeCalls';
import CallHistory from './views/CallHistory';
import CallSchedule from './views/CallSchedule';
import AgentAnalytics from './views/AgentAnalytics';

const CallsAnalytics = () => {
  const [selectedView, setSelectedView] = useState('overview');

  const renderView = () => {
    switch (selectedView) {
      case 'overview':
        return <CallsOverview />;
      case 'realtime':
        return <RealtimeCalls />;
      case 'history':
        return <CallHistory />;
      case 'schedule':
        return <CallSchedule />;
      case 'agents':
        return <AgentAnalytics />;
      default:
        return <CallsOverview />;
    }
  };

  return (
    <div className="flex gap-6">
      <CallsSidebar 
        selectedView={selectedView} 
        onViewChange={setSelectedView} 
      />
      <div className="flex-1">
        {renderView()}
      </div>
    </div>
  );
};

export default CallsAnalytics;