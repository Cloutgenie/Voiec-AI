import express from 'express';
import { generateCallSummary, generateInsights } from '../controllers/aiController.js';
import { validateAIRequest } from '../middleware/validation.js';

const router = express.Router();

router.post('/summary', validateAIRequest, generateCallSummary);
router.post('/insights', validateAIRequest, generateInsights);

export default router;