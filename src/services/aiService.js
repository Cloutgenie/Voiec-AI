import OpenAI from 'openai';
import logger from '../utils/logger.js';

class AIService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async generateCallSummary(transcript) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert at analyzing customer service calls. Provide concise, actionable summaries focusing on key points, sentiment, and action items."
          },
          {
            role: "user",
            content: `Please analyze this call transcript and provide a summary: ${transcript}`
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      return {
        summary: response.choices[0].message.content,
        sentiment: this.analyzeSentiment(response.choices[0].message.content),
        timestamp: new Date()
      };
    } catch (error) {
      logger.error('Error generating call summary:', error);
      throw new Error('Failed to generate call summary');
    }
  }

  analyzeSentiment(text) {
    // Basic sentiment analysis - can be enhanced with more sophisticated logic
    const positiveWords = ['happy', 'satisfied', 'great', 'excellent', 'resolved'];
    const negativeWords = ['unhappy', 'frustrated', 'angry', 'issue', 'problem'];

    let score = 0;
    const words = text.toLowerCase().split(' ');

    words.forEach(word => {
      if (positiveWords.includes(word)) score += 1;
      if (negativeWords.includes(word)) score -= 1;
    });

    if (score > 0) return 'positive';
    if (score < 0) return 'negative';
    return 'neutral';
  }

  async generateInsights(summaries) {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "Analyze multiple call summaries and provide business insights, trends, and recommendations."
          },
          {
            role: "user",
            content: `Please analyze these call summaries and provide insights: ${JSON.stringify(summaries)}`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      });

      return {
        insights: response.choices[0].message.content,
        timestamp: new Date()
      };
    } catch (error) {
      logger.error('Error generating insights:', error);
      throw new Error('Failed to generate insights');
    }
  }
}

export default new AIService();