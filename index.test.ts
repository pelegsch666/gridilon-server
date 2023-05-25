import addNumbers from './indexfortest';


test('add function returns the expected value', () => {
  expect(addNumbers(1, 2)).toBe(3);
});