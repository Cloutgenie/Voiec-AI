const logger = require('../../../utils/logger');
const { validateConfig } = require('../utils/configValidator');

async function processConfigIntent(result) {
  try {
    const configType = result.intent.split('.')[1];
    const configValidation = await validateConfig(configType);

    return {
      response: {
        message: `Here's how to configure ${configType}:`,
        steps: configValidation.steps,
        requirements: configValidation.requirements
      },
      confidence: result.score
    };
  } catch (error) {
    logger.error('Error processing config intent:', error);
    throw new Error('Failed to process configuration request');
  }
}

module.exports = { processConfigIntent };