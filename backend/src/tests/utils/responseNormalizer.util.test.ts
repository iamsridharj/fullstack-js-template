import { normalizeResponse } from '@utils/responseNormalizer.util';

describe('normalizeResponse', () => {
  it('should normalize the response correctly', () => {
    const data = { name: 'Test', value: 123 };
    const result = normalizeResponse(data);

    expect(result).toEqual({
      status: 'success',
      data,
    });
  });

  it('should normalize an empty response correctly', () => {
    const data = null;
    const result = normalizeResponse(data);

    expect(result).toEqual({
      status: 'success',
      data,
    });
  });

  it('should normalize an array response correctly', () => {
    const data = [1, 2, 3];
    const result = normalizeResponse(data);

    expect(result).toEqual({
      status: 'success',
      data,
    });
  });

  it('should normalize a complex object response correctly', () => {
    const data = { items: [{ id: 1 }, { id: 2 }], count: 2 };
    const result = normalizeResponse(data);

    expect(result).toEqual({
      status: 'success',
      data,
    });
  });
});
