// Challenge #3: EV Class as a child of Car

class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  }
  
  class EV extends Car {
    constructor(make, speed, charge) {
      super(make, speed); // Call parent constructor
      this.charge = charge; // Additional property for EV
    }
  
    chargeBattery(chargeTo) {
      this.charge = chargeTo;
      console.log(`${this.make} battery charged to ${this.charge}%`);
    }
  
    // Overridden accelerate method
    accelerate() {
      this.speed += 20;
      this.charge -= 1;
      console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
  }
  
  // Create an EV instance and test methods
  const tesla = new EV('Tesla', 120, 23);
  
  tesla.accelerate();
  tesla.brake();
  tesla.chargeBattery(90);
  tesla.accelerate();
  