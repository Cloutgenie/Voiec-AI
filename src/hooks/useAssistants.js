import { useState, useEffect } from 'react';
import vapiService from '../services/vapiService';

const mockAssistants = [
  {
    id: '1',
    name: 'Customer Support',
    description: 'Handles general customer inquiries and support tickets',
    status: 'active',
    metrics: {
      totalCalls: '1,234',
      avgDuration: '4m 32s',
      accuracy: '98%'
    }
  },
  {
    id: '2',
    name: 'Sales Assistant',
    description: 'Assists with product information and sales inquiries',
    status: 'active',
    metrics: {
      totalCalls: '856',
      avgDuration: '5m 15s',
      accuracy: '96%'
    }
  },
  {
    id: '3',
    name: 'Technical Support',
    description: 'Provides technical troubleshooting and guidance',
    status: 'inactive',
    metrics: {
      totalCalls: '432',
      avgDuration: '8m 45s',
      accuracy: '94%'
    }
  }
];

export const useAssistants = () => {
  const [assistants, setAssistants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAssistants = async () => {
    try {
      setLoading(true);
      // For development, use mock data
      // In production, uncomment the following line:
      // const data = await vapiService.getAssistants();
      const data = mockAssistants;
      setAssistants(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching assistants:', err);
    } finally {
      setLoading(false);
    }
  };

  const createAssistant = async (config) => {
    try {
      const newAssistant = await vapiService.createAssistant(config);
      setAssistants(prev => [...prev, newAssistant]);
      return newAssistant;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteAssistant = async (id) => {
    try {
      await vapiService.deleteAssistant(id);
      setAssistants(prev => prev.filter(assistant => assistant.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchAssistants();
  }, []);

  return {
    assistants,
    loading,
    error,
    createAssistant,
    deleteAssistant,
    refreshAssistants: fetchAssistants
  };
};