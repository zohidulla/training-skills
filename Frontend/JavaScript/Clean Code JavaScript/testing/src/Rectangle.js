// Class to test: Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate area
  calculateArea() {
    return this.width * this.height;
  }
}

module.exports = Rectangle;
