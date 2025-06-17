class Shape {
  setColor(color) {
    // ...
  }

  static renderShapes(shapes) {
    shapes.forEach((shape) => {
      const area = shape.getArea();
      this.renderShape(area);
    });
  }

  static renderShape(area) {
    console.log(area);
    // ...
  }

  getArea() {
    // this must be implemented in the subclass
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  setWidth(newWidth) {
    this.width = newWidth;
  }

  setHeight(newHeight) {
    this.height = newHeight;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  setLength(newLength) {
    this.length = newLength;
  }

  getArea() {
    return this.length ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  setRadius(newRadius) {
    this.radius = newRadius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// function renderShapes(shapes) {
//   shapes.forEach((shape) => {
//     const area = shape.getArea();
//     shape.render(area);
//   });
// }

const firstRectangle = new Rectangle(4, 5);
firstRectangle.setHeight(3);
const secondRectangle = new Rectangle(2, 30);
secondRectangle.setWidth(50);
const square = new Square(5);
square.setLength(20);
const circle = new Circle(7);
circle.setRadius(9);

const shapes = [firstRectangle, secondRectangle, square, circle];
Shape.renderShapes(shapes);
