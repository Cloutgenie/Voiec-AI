import express from 'express';
import { generateSuggestions, improveMessage } from '../controllers/messageSuggestionController.js';
import { validateMessageRequest } from '../middleware/validation.js';

const router = express.Router();

router.post('/suggestions', validateMessageRequest, generateSuggestions);
router.post('/improve', validateMessageRequest, improveMessage);

export default router;