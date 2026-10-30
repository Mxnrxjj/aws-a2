'use strict';

const { add, subtract, multiply, divide } = require('../calculator');

describe('calculator', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(7);
  });

  test('adds two negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test('subtracts', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplies', () => {
    expect(multiply(3, 7)).toBe(21);
  });

  test('divides', () => {
    expect(divide(9, 3)).toBe(3);
  });

  test('throws when dividing by zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
  });
});