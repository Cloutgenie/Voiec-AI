import Joi from 'joi';

export const validateAIRequest = (req, res, next) => {
  const schema = Joi.object({
    transcript: Joi.string().when('summaries', { is: Joi.exist(), then: Joi.forbidden(), otherwise: Joi.required() }),
    summaries: Joi.array().items(Joi.object({
      summary: Joi.string().required(),
      sentiment: Joi.string().valid('positive', 'negative', 'neutral').required(),
      timestamp: Joi.date().required()
    })).when('transcript', { is: Joi.exist(), then: Joi.forbidden(), otherwise: Joi.required() })
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      message: error.details[0].message
    });
  }

  next();
};