// Challenge #1: Car Class

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
  
  // Create car instances and test methods
  const bmw = new Car('BMW', 120);
  const mercedes = new Car('Mercedes', 95);
  
  bmw.accelerate();
  bmw.brake();
  
  mercedes.accelerate();
  mercedes.brake();
  