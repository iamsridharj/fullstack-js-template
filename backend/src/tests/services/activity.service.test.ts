import { Op } from 'sequelize';
import { getAllActivities, filteredActivities, createActivities } from '@services/activity.service';
import { Activity } from '@models/activity.model';

jest.mock('@models/activity.model', () => ({
  Activity: {
    findAndCountAll: jest.fn(),
    bulkCreate: jest.fn(),
  },
}));

describe('Activity Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllActivities', () => {
    it('should fetch all activities and return them', async () => {
      const mockActivities = [{ title: 'Test Activity', price: 100, currency: 'USD', supplier_name: 'Test Supplier', location: 'Test Location' }];
      (Activity.findAndCountAll as jest.Mock).mockResolvedValue({ count: 1, rows: mockActivities });

      const result = await getAllActivities(10, 0);

      expect(Activity.findAndCountAll).toHaveBeenCalledWith({ limit: 10, offset: 0 });
      expect(result).toEqual({ activities: mockActivities, total: 1 });
    });

    it('should throw an error if fetching activities fails', async () => {
      (Activity.findAndCountAll as jest.Mock).mockRejectedValue(new Error('Error fetching all activities'));

      await expect(getAllActivities(10, 0)).rejects.toThrow('Error fetching all activities');
    });
  });

  describe('filteredActivities', () => {
    it('should filter activities based on title and return them', async () => {
      const mockActivities = [{ title: 'Test Activity', price: 100, currency: 'USD', supplier_name: 'Test Supplier', location: 'Test Location' }];
      (Activity.findAndCountAll as jest.Mock).mockResolvedValue({ count: 1, rows: mockActivities });

      const filters = { q: 'Test' };
      const result = await filteredActivities(filters, 10, 0);

      expect(Activity.findAndCountAll).toHaveBeenCalledWith({
        where: { title: { [Op.like]: '%Test%' } },
        limit: 10,
        offset: 0,
      });
      expect(result).toEqual({ activities: mockActivities, total: 1 });
    });

    it('should throw an error if searching activities fails', async () => {
      const filters = { q: 'Test' };
      (Activity.findAndCountAll as jest.Mock).mockRejectedValue(new Error('Error searching activities'));

      await expect(filteredActivities(filters, 10, 0)).rejects.toThrow('Error searching activities');
    });
  });

  describe('createActivities', () => {
    it('should create activities and return them', async () => {
      const mockActivities = [{ title: 'New Activity', price: 100, currency: 'USD', supplier_name: 'New Supplier', location: 'New Location' }];
      (Activity.bulkCreate as jest.Mock).mockResolvedValue(mockActivities);

      const data = [{ title: 'New Activity', price: 100, currency: 'USD', supplier_name: 'New Supplier', location: 'New Location' }];
      const result = await createActivities(data);

      expect(Activity.bulkCreate).toHaveBeenCalledWith(data);
      expect(result).toEqual(mockActivities);
    });

    it('should throw an error if creating activities fails', async () => {
      const data = [{ title: 'New Activity', price: 100, currency: 'USD', supplier_name: 'New Supplier', location: 'New Location' }];
      (Activity.bulkCreate as jest.Mock).mockRejectedValue(new Error('Error creating activities'));

      await expect(createActivities(data)).rejects.toThrow('Error creating activities');
    });
  });
});
