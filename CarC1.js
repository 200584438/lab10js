// Challenge #2: CarCl Class with Getter and Setter for speed in mi/h

class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    get speedUS() {
      return this.speed / 1.6; // Convert km/h to mi/h
    }
  
    set speedUS(speedInMiles) {
      this.speed = speedInMiles * 1.6; // Convert mi/h to km/h
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
  
  // Create a new CarCl instance and test methods
  const ford = new CarCl('Ford', 120);
  
  ford.accelerate();
  ford.brake();
  
  // Testing the getter and setter
  console.log(`${ford.make} speed in mi/h: ${ford.speedUS}`);
  ford.speedUS = 100; // Set speed in mi/h
  console.log(`${ford.make} new speed in km/h: ${ford.speed}`);
  