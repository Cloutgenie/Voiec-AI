import express from 'express';
import config from 'config';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { errorHandler } from './api/middleware/errorHandler.js';
import logger from './utils/logger.js';

// Import routes
import callRoutes from './api/routes/callRoutes.js';
import paymentRoutes from './api/routes/paymentRoutes.js';
import webhookRoutes from './api/routes/webhookRoutes.js';
import aiRoutes from './api/routes/aiRoutes.js';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/calls', callRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/webhooks', webhookRoutes);
app.use('/api/ai', aiRoutes);

// Error handling
app.use(errorHandler);

const port = config.get('port') || 3000;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

export default app;