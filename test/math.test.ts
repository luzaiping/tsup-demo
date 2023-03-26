// Import the functions to be tested
import { add, subtract, multiple } from '../src/math';

// Test the add function
test('add function should return the correct sum', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-2, 3)).toBe(1);
  expect(add(0, 0)).toBe(0);
});

// Test the subtract function
test('subtract function should return the correct difference', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(0, 0)).toBe(0);
  expect(subtract(-2, 3)).toBe(-5);
});

// Test the multiple function
test('multiple function should return the correct product', () => {
  expect(multiple(2, 3)).toBe(6);
  expect(multiple(0, 0)).toBe(0);
  expect(multiple(-2, 3)).toBe(-6);
});
