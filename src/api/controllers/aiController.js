import aiService from '../../services/aiService.js';
import logger from '../../utils/logger.js';

export const generateCallSummary = async (req, res) => {
  try {
    const { transcript } = req.body;
    const summary = await aiService.generateCallSummary(transcript);
    res.json(summary);
  } catch (error) {
    logger.error('Error in generateCallSummary controller:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to generate call summary'
    });
  }
};

export const generateInsights = async (req, res) => {
  try {
    const { summaries } = req.body;
    const insights = await aiService.generateInsights(summaries);
    res.json(insights);
  } catch (error) {
    logger.error('Error in generateInsights controller:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to generate insights'
    });
  }
};