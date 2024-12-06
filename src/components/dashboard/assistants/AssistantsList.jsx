import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useVapiContext } from '../../../contexts/VapiContext';
import LoadingScreen from '../../common/LoadingScreen';

const AssistantsList = () => {
  const { isInitialized, error } = useVapiContext();
  const [assistants, setAssistants] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchAssistants = async () => {
      try {
        // Mock data for development
        const mockAssistants = [
          {
            id: '1',
            name: 'Customer Service',
            description: 'Handles general customer inquiries',
            status: 'active',
            metrics: {
              totalCalls: 156,
              successRate: '94%',
              avgDuration: '4m 32s'
            }
          },
          {
            id: '2',
            name: 'Sales Assistant',
            description: 'Manages product inquiries and sales',
            status: 'active',
            metrics: {
              totalCalls: 89,
              successRate: '92%',
              avgDuration: '5m 15s'
            }
          },
          {
            id: '3',
            name: 'Technical Support',
            description: 'Provides technical assistance',
            status: 'inactive',
            metrics: {
              totalCalls: 234,
              successRate: '88%',
              avgDuration: '6m 45s'
            }
          }
        ];
        setAssistants(mockAssistants);
      } catch (err) {
        console.error('Error fetching assistants:', err);
      } finally {
        setLoading(false);
      }
    };

    if (isInitialized) {
      fetchAssistants();
    }
  }, [isInitialized]);

  if (!isInitialized || loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Assistants</h2>
          <p className="text-gray-600">Manage and monitor your AI assistants</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Assistant
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assistants.map((assistant) => (
          <motion.div
            key={assistant.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-purple-600" />
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">{assistant.name}</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  assistant.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {assistant.status}
                </span>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{assistant.description}</p>

            <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">
                  {assistant.metrics.totalCalls}
                </div>
                <div className="text-sm text-gray-500">Total Calls</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">
                  {assistant.metrics.successRate}
                </div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">
                  {assistant.metrics.avgDuration}
                </div>
                <div className="text-sm text-gray-500">Avg Duration</div>
              </div>
            </div>

            <div className="mt-4 flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200"
              >
                Configure
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                View Calls
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AssistantsList;