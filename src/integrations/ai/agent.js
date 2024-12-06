const { NlpManager } = require('node-nlp');
const logger = require('../../utils/logger');
const { processSetupIntent } = require('./intents/setupIntent');
const { processConfigIntent } = require('./intents/configIntent');
const { processTroubleshootIntent } = require('./intents/troubleshootIntent');

class AIAgent {
  constructor() {
    this.nlp = new NlpManager({ languages: ['en'] });
    this.initializeIntents();
  }

  async initializeIntents() {
    // Setup-related intents
    this.nlp.addDocument('en', 'how do I set up the system', 'setup.initial');
    this.nlp.addDocument('en', 'help me configure the application', 'setup.initial');
    
    // Configuration-related intents
    this.nlp.addDocument('en', 'how do I configure the database', 'config.database');
    this.nlp.addDocument('en', 'setup payment integration', 'config.payment');
    
    // Troubleshooting intents
    this.nlp.addDocument('en', 'system is not working', 'troubleshoot.general');
    this.nlp.addDocument('en', 'connection error', 'troubleshoot.connection');

    await this.nlp.train();
  }

  async processQuery(query) {
    try {
      const result = await this.nlp.process('en', query);
      return await this.handleIntent(result);
    } catch (error) {
      logger.error('Error processing AI agent query:', error);
      throw new Error('Failed to process query');
    }
  }

  async handleIntent(result) {
    const intent = result.intent;
    const confidence = result.score;

    if (confidence < 0.5) {
      return {
        response: "I'm not sure I understand. Could you please rephrase your question?",
        confidence
      };
    }

    switch (intent) {
      case 'setup.initial':
        return await processSetupIntent(result);
      case 'config.database':
      case 'config.payment':
        return await processConfigIntent(result);
      case 'troubleshoot.general':
      case 'troubleshoot.connection':
        return await processTroubleshootIntent(result);
      default:
        return {
          response: "I'm not sure how to help with that specific request.",
          confidence
        };
    }
  }
}

module.exports = new AIAgent();