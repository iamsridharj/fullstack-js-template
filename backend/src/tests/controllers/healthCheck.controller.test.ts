import request from 'supertest';
import express, { Application } from 'express';
import { healthCheckController } from '@controllers/healthCheck.controller';
import { normalizeResponse } from '@utils/responseNormalizer.util';

const app: Application = express();

app.get('/health', healthCheckController);

jest.mock('@utils/responseNormalizer.util', () => ({
  normalizeResponse: jest.fn((data) => data),
}));

describe('HealthCheck Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 200 and a healthy message', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Server is healthy!" });
    expect(normalizeResponse).toHaveBeenCalledWith({ message: "Server is healthy!" });
  });

  it('should handle errors', async () => {
    (normalizeResponse as jest.Mock).mockImplementation(() => {
      throw new Error('Test Error');
    });
    const res = await request(app).get('/health');
    expect(res.status).toBe(500);
  });
});
