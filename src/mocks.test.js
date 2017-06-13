import { forEach } from './mocks';

test('forEach', () => {
  const mockCallback = jest.fn();

  forEach([10, 20, 30], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(3);
  expect(mockCallback.mock.calls[0][0]).toBe(10);
  expect(mockCallback.mock.calls[1][0]).toBe(20);
});
