import hello from '../hello';

test('returns "Hello, world!"', () => {
  expect(hello()).toBe('Hello, world!');
});
