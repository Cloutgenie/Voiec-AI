import React from 'react';
import AssistantCard from './AssistantCard';

const AssistantGrid = ({ assistants, onDeleteAssistant }) => {
  if (!assistants.length) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900">No Assistants Found</h3>
        <p className="mt-2 text-sm text-gray-500">
          Create your first AI assistant to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assistants.map((assistant) => (
        <AssistantCard 
          key={assistant.id} 
          assistant={assistant}
          onDelete={() => onDeleteAssistant(assistant.id)}
        />
      ))}
    </div>
  );
};

export default AssistantGrid;