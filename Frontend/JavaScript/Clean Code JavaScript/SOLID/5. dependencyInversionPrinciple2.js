class Engine {
  constructor(thrust, enginesQty) {
    this.enginesQty = enginesQty;
    this.thrust = thrust;
  }
  // Abstract method for propulsion
  propel() {
    throw new Error('Method not implemented');
  }
}

// Define concrete implementations of Engine
class RocketEngine extends Engine {
  constructor(thrust, enginesQty, fuelType, fuelCapacity) {
    super(thrust, enginesQty);
    this.fuelType = fuelType;
    this.fuelCapacity = fuelCapacity;
    this.maxTemperature = 3000; // Maximum temperature tolerance in Kelvin
    this.maxPressure = 100000; // Maximum pressure tolerance in Pascals
    this.powerRequirements = 'High';
    this.lifetime = 'Limited'; // Expected lifetime of the engine
  }
  // Implementation of propulsion for a rocket engine
  propel() {
    console.log('Rocket engine is propelling the spaceship.');
  }
}

class IonEngine extends Engine {
  constructor(thrust, enginesQty, propellantType, propellantCapacity) {
    super(thrust, enginesQty);
    this.propellantType = propellantType;
    this.propellantCapacity = propellantCapacity;
    this.powerRequirements = 'Low';
    this.maxTemperature = 500; // Maximum temperature tolerance in Kelvin
    this.maxPressure = 10000; // Maximum pressure tolerance in Pascals
    this.lifetime = 'Extended'; // Expected lifetime of the engine
  }
  // Implementation of propulsion for an ion engine
  propel() {
    console.log('Ion engine is propelling the spaceship.');
  }
}

// Spaceship class depends on Engine interface
class Spaceship {
  constructor(engine) {
    this.engine = engine;
  }

  // Method to initiate propulsion using the engine
  initiatePropulsion() {
    this.engine.propel();
  }
}

// Example usage
// Create instances of RocketEngine and IonEngine
const rocketEngine = new RocketEngine(50000, 10, 'Liquid Fuel', 10000);
const ionEngine = new IonEngine(1000, 15, 'Xenon Gas', 5000);

const spaceshipWithRocketEngine = new Spaceship(rocketEngine); // Inject the rocket engine into the spaceship
const spaceshipWithIonEngine = new Spaceship(ionEngine); // Inject the ion engine into the spaceship

// Spaceships initiate propulsion without knowing the specific engine implementations
spaceshipWithRocketEngine.initiatePropulsion();
spaceshipWithIonEngine.initiatePropulsion();

console.log(rocketEngine);
console.log(ionEngine);
