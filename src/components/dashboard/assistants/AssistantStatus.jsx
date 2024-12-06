import React from 'react';

const AssistantStatus = ({ status = 'inactive' }) => {
  const statusStyles = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    error: 'bg-red-100 text-red-800'
  };

  const displayStatus = status?.toLowerCase() || 'inactive';

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      statusStyles[displayStatus] || statusStyles.inactive
    }`}>
      {displayStatus.charAt(0).toUpperCase() + displayStatus.slice(1)}
    </span>
  );
};

export default AssistantStatus;