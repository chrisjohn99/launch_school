class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  startEngine() {
    console.log("Ready to go!");
  }
  constructor(year) {
    super(year)
    this.startEngine()
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003
