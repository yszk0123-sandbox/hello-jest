test('object', () => {
  const data = { one: 1 };
  data.two = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

test('numbers', () => {
  const value = 1 + 2;

  expect(value).toBe(3);
  expect(value).toBeGreaterThan(2);
  expect(value).toBeLessThanOrEqual(3.1);
});

test('floating point numbers', () => {
  const value = 0.1 + 0.2;

  expect(value).not.toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});

test('strings', () => {
  expect('red, green and blue').toMatch(/green/);
  expect('red, green and blue').not.toMatch(/yellow/);
});

test('arrays', () => {
  const values = [10, 20, 30];

  expect(values).toContain(20);
  expect(values).not.toContain('20');
});

test('exceptions', () => {
  function throwError() {
    throw new Error('something');
  }

  expect(throwError).toThrow();
  expect(throwError).toThrow(Error);
  expect(throwError).toThrow('something');
  expect(throwError).toThrow(/some/);
});
