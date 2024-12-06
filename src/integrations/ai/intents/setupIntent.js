const logger = require('../../../utils/logger');
const { validateSystemRequirements } = require('../utils/systemValidator');
const { generateSetupGuide } = require('../utils/guideGenerator');

async function processSetupIntent(result) {
  try {
    const systemRequirements = await validateSystemRequirements();
    const setupGuide = await generateSetupGuide(systemRequirements);

    return {
      response: {
        message: "I'll help you set up the system.",
        guide: setupGuide,
        requirements: systemRequirements
      },
      confidence: result.score
    };
  } catch (error) {
    logger.error('Error processing setup intent:', error);
    throw new Error('Failed to process setup request');
  }
}

module.exports = { processSetupIntent };