import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PencilIcon, SparklesIcon } from '@heroicons/react/24/outline';
import MessageSuggestionCard from './cards/MessageSuggestionCard';

const MessageComposer = () => {
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetSuggestions = async () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/messages/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context: message })
      });
      
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error getting suggestions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImproveMessage = async () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/messages/improve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      
      const data = await response.json();
      setMessage(data.improved);
    } catch (error) {
      console.error('Error improving message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <PencilIcon className="h-6 w-6 text-purple-500" />
          Message Composer
        </h2>
        <p className="text-gray-600">Write your message and get AI-powered suggestions</p>
      </div>

      <div className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetSuggestions}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            <SparklesIcon className="h-5 w-5" />
            Get Suggestions
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleImproveMessage}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors disabled:opacity-50"
          >
            Improve Message
          </motion.button>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" />
          </div>
        )}

        {suggestions.length > 0 && (
          <div className="space-y-4 mt-6">
            <h3 className="text-lg font-semibold">Suggestions</h3>
            {suggestions.map((suggestion, index) => (
              <MessageSuggestionCard
                key={index}
                suggestion={suggestion}
                onSelect={() => setMessage(suggestion.text)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageComposer;