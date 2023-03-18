class Car {
  static getSpecs(Car) {
    console.log(
      `maxSpeed: ${Car.maxSpeed}, speed: ${Car.speed}, isOn: ${Car.isOn},distance: ${Car.distance}, price: ${Car.price}`
    );
  }

  constructor({ speed, price, maxSpeed, isOn, distance } = {}) {
    this.speed = speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  getPrice() {
    return this.price;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed = this.speed + value;
      return;
    }
  }
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
      return;
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance = this.speed * hours;
    }
  }
}

///

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
