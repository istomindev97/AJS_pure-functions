import getHealthStatus from '../app';

test('should return healthy', () => {
  const result = getHealthStatus({name: 'Маг', health: 80});

  expect(result).toBe('healthy');
});

test('should return wounded', () => {
  const result = getHealthStatus({name: 'лучник', health: 40});

  expect(result).toBe('wounded');
});

test('should return critical', () => {
  const result = getHealthStatus({name: 'мечник', health: 10});

  expect(result).toBe('critical');
});