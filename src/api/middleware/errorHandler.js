import logger from '../../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
  logger.error(err.message, { error: err, stack: err.stack });

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      status: 'error',
      message: err.message
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      status: 'error',
      message: 'Unauthorized access'
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
};