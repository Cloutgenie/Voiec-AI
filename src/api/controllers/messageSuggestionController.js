import messageSuggestionService from '../../services/messageSuggestionService.js';
import logger from '../../utils/logger.js';

export const generateSuggestions = async (req, res) => {
  try {
    const { context } = req.body;
    const suggestions = await messageSuggestionService.generateSuggestions(context);
    res.json(suggestions);
  } catch (error) {
    logger.error('Error in generateSuggestions controller:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to generate message suggestions'
    });
  }
};

export const improveMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const improved = await messageSuggestionService.improveMessage(message);
    res.json(improved);
  } catch (error) {
    logger.error('Error in improveMessage controller:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to improve message'
    });
  }
};