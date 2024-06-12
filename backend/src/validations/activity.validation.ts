import Joi from 'joi';

export const activitySchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  currency: Joi.string().required(),
  rating: Joi.number().optional(),
  special_offer: Joi.boolean().optional(),
  supplier_name: Joi.string().required(),
  location: Joi.string().required(),
});

export const activitiesSchema = Joi.array().items(activitySchema);
