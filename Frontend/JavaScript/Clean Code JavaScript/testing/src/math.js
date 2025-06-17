// Function to test: Add two numbers
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers');
  }
  return a + b;
}

// Function to test: Divide two numbers
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: division by zero');
  }
  return a / b;
}

module.exports = {
  add,
  divide,
};
