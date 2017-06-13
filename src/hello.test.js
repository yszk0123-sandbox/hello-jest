const hello = require('./hello');

test('returns "Hello, world!"', () => {
  expect(hello()).toBe('Hello, world!');
});
