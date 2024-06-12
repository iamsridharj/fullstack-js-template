import { Op } from 'sequelize';
import { Activity, ActivityCreationAttributes } from '@models/activity.model';
import { ActivityQueryParams } from '@controllers/activity.controller';

interface ActivityResult {
  activities: Activity[];
  total: number;
}

export const getAllActivities = async (limit: number, offset: number): Promise<ActivityResult> => {
  try {
    const { count, rows } = await Activity.findAndCountAll({ limit, offset });
    return { activities: rows, total: count };
  } catch (err) {
    throw new Error('Error fetching all activities');
  }
};

export const filteredActivities = async (filters: ActivityQueryParams, limit: number, offset: number): Promise<ActivityResult> => {
  try {
    const { q: title } = filters;
    const whereClause: any = {};

    if (title) {
      whereClause.title = { [Op.like]: `%${title}%` };
    }
    const { count, rows } = await Activity.findAndCountAll({
      where: whereClause,
      limit,
      offset,
    });
    return { activities: rows, total: count };
  } catch (err) {
    throw new Error('Error searching activities');
  }
};

export const createActivities = async (
  data: Omit<ActivityCreationAttributes, 'id'>[]
): Promise<Activity[]> => {
  try {
    const activities = await Activity.bulkCreate(data);
    return activities;
  } catch (err) {
    throw new Error('Error creating activities');
  }
};
