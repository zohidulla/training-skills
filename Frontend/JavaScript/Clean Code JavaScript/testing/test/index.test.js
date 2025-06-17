// Import necessary modules
const assert = require('assert');
const Rectangle = require('../src/Rectangle');
const { add, divide } = require('../src/math');

// Mocha test suite
describe('Test Suite', () => {
  // Test 1: Add two positive numbers
  it('should add two positive numbers', () => {
    assert.equal(add(3, 4), 7);
  });

  // Test 2: Add two negative numbers
  it('should add two negative numbers', () => {
    assert.equal(add(-3, -4), -7);
  });

  // Test 3: Add a positive and a negative number
  it('should add a positive and a negative number', () => {
    assert.equal(add(3, -4), -1);
  });

  // Test 4: Test if a rectangle object is created properly
  it('should create a rectangle object with given width and height', () => {
    const rect = new Rectangle(5, 10);
    assert.strictEqual(rect.width, 5);
    assert.strictEqual(rect.height, 10);
  });

  // Test 5: Test if area of the rectangle is calculated correctly
  it('should calculate the area of the rectangle', () => {
    const rect = new Rectangle(10, 3);
    assert.strictEqual(rect.calculateArea(), 30);
  });

  // Test 6: Test if a division by zero throws an error
  it('should throw an error when dividing by zero', () => {
    assert.throws(() => divide(10, 0), /division by zero/);
  });

  // Test 7: Test if a string contains a specific substring
  it('should check if a string contains a specific substring', () => {
    assert.ok('Hello World'.includes('World'));
  });

  // Test 8: Test if two arrays are equal
  it('should check if two arrays are equal', () => {
    assert.deepStrictEqual([1, 2, 3], [1, 2, 3]);
  });

  // Test 9: Test if an object property has a specific value
  it('should check if an object property has a specific value', () => {
    const obj = { name: 'John', age: 30 };
    assert.strictEqual(obj.age, 30);
  });

  // Test 10: Test if a function throws an error
  it('should throw an error when calling a function with invalid arguments', () => {
    assert.throws(() => add(5, 'abc'), TypeError);
  });
});
