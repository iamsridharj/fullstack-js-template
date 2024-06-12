import { Request, Response, NextFunction } from 'express';
import { ParsedQs } from 'qs';
import { getAllActivities, filteredActivities, createActivities } from '@services/activity.service';
import { normalizeResponse } from '@utils/responseNormalizer.util';
import { ActivityCreationAttributes } from '@models/activity.model';

export interface ActivityQueryParams extends ParsedQs {
  limit?: string;
  offset?: string;
  q?: string;
}

interface TypedRequestQuery<T extends ParsedQs> extends Request {
  query: T;
}

type CreateActivityRequest = Request<{}, {}, Omit<ActivityCreationAttributes, 'id'>[]>;

export const getAllActivitiesController = async (
  req: TypedRequestQuery<ActivityQueryParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { limit = '10', offset = '0' } = req.query;
    const { activities, total } = await getAllActivities(Number(limit), Number(offset));
    res.status(200).json(normalizeResponse({ data: activities, pagination: { limit: Number(limit), offset: Number(offset), total } }));
  } catch (err) {
    next(err);
  }
};

export const filteredActivitiesController = async (
  req: TypedRequestQuery<ActivityQueryParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { limit = '10', offset = '0' } = req.query;
    const { activities, total } = await filteredActivities(req.query, Number(limit), Number(offset));
    res.status(200).json(normalizeResponse({ data: activities, pagination: { limit: Number(limit), offset: Number(offset), total } }));
  } catch (err) {
    next(err);
  }
};


export const createActivitiesController = async (
  req: CreateActivityRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const activitiesData = req.body;
    const newActivities = await createActivities(activitiesData);
    res.status(201).json(normalizeResponse(newActivities));
  } catch (err) {
    next(err);
  }
};