import OpenAI from 'openai';
import logger from '../utils/logger.js';

class MessageSuggestionService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async generateSuggestions(context) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at crafting professional business communications. Generate appropriate message suggestions based on the context provided."
          },
          {
            role: "user",
            content: `Please suggest three professional responses for this context: ${context}`
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
        n: 3
      });

      return response.choices.map(choice => ({
        text: choice.message.content,
        timestamp: new Date()
      }));
    } catch (error) {
      logger.error('Error generating message suggestions:', error);
      throw new Error('Failed to generate message suggestions');
    }
  }

  async improveMessage(message) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at improving business communications. Make messages more professional, clear, and effective while maintaining their core message."
          },
          {
            role: "user",
            content: `Please improve this message while keeping its essence: ${message}`
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      return {
        original: message,
        improved: response.choices[0].message.content,
        timestamp: new Date()
      };
    } catch (error) {
      logger.error('Error improving message:', error);
      throw new Error('Failed to improve message');
    }
  }
}

export default new MessageSuggestionService();