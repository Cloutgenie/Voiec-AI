const logger = require('../../../utils/logger');
const { diagnoseIssue } = require('../utils/diagnostics');

async function processTroubleshootIntent(result) {
  try {
    const issueType = result.intent.split('.')[1];
    const diagnosis = await diagnoseIssue(issueType);

    return {
      response: {
        message: "I'll help you troubleshoot the issue.",
        diagnosis: diagnosis.result,
        suggestions: diagnosis.suggestions
      },
      confidence: result.score
    };
  } catch (error) {
    logger.error('Error processing troubleshoot intent:', error);
    throw new Error('Failed to process troubleshooting request');
  }
}

module.exports = { processTroubleshootIntent };