class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    return this;
  }
}

const car = new Car('Ford', 'F-150', 'red');
console.log(car);

// car.setColor('pink');
// console.log(car);

// car.save();

const res = car.setColor('black');
console.log(res === car);
res.save();

car
  .setColor('black')
  .save()
  .setModel('New Model')
  .save()
  .setMake('Mercedes')
  .save();

console.log(car);
