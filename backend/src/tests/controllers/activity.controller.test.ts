import request from 'supertest';
import express, { Application } from 'express';
import { getAllActivitiesController, filteredActivitiesController, createActivitiesController } from '@controllers/activity.controller';
import * as activityService from '@services/activity.service';

const app: Application = express();
app.use(express.json());

// Mock routes
app.get('/activities', getAllActivitiesController);
app.get('/activities/search', filteredActivitiesController);
app.post('/activities', createActivitiesController);

jest.mock('@services/activity.service');
jest.mock('@utils/responseNormalizer.util', () => ({
  normalizeResponse: jest.fn((data) => data),
}));

describe('Activity Controllers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllActivitiesController', () => {
    it('should fetch all activities and return them', async () => {
      const mockActivities = [{ title: 'Test Activity', price: 100, currency: 'USD', supplier_name: 'Test Supplier', location: 'Test Location' }];
      (activityService.getAllActivities as jest.Mock).mockResolvedValue({ activities: mockActivities, total: 1 });

      const res = await request(app).get('/activities?limit=10&offset=0');

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ data: mockActivities, pagination: { limit: 10, offset: 0, total: 1 } });
    });

    it('should handle errors', async () => {
      const errorMessage = 'Error fetching activities';
      (activityService.getAllActivities as jest.Mock).mockRejectedValue(new Error(errorMessage));

      const res = await request(app).get('/activities?limit=10&offset=0');

      expect(res.status).toBe(500);
    });
  });

  describe('filteredActivitiesController', () => {
    it('should search activities and return them', async () => {
      const mockActivities = [{ title: 'Test Activity', price: 100, currency: 'USD', supplier_name: 'Test Supplier', location: 'Test Location' }];
      (activityService.filteredActivities as jest.Mock).mockResolvedValue({ activities: mockActivities, total: 1 });

      const res = await request(app).get('/activities/search?q=Test&limit=10&offset=0');

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ data: mockActivities, pagination: { limit: 10, offset: 0, total: 1 } });
    });

    it('should handle errors', async () => {
      const errorMessage = 'Error searching activities';
      (activityService.filteredActivities as jest.Mock).mockRejectedValue(new Error(errorMessage));

      const res = await request(app).get('/activities/search?q=Test&limit=10&offset=0');

      expect(res.status).toBe(500);
    });
  });

  describe('createActivitiesController', () => {
    it('should create activities and return them', async () => {
      const mockActivities = [{ title: 'New Activity', price: 100, currency: 'USD', supplier_name: 'New Supplier', location: 'New Location' }];
      (activityService.createActivities as jest.Mock).mockResolvedValue(mockActivities);

      const res = await request(app).post('/activities').send(mockActivities);

      expect(res.status).toBe(201);
      expect(res.body).toEqual(mockActivities);
    });

    it('should handle errors', async () => {
      const errorMessage = 'Error creating activities';
      (activityService.createActivities as jest.Mock).mockRejectedValue(new Error(errorMessage));

      const res = await request(app).post('/activities').send([{ title: 'New Activity', price: 100, currency: 'USD', supplier_name: 'New Supplier', location: 'New Location' }]);

      expect(res.status).toBe(500);
    });
  });
});
