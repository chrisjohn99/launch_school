class Vehicle {
  startEngine() {
    return "Ready to go!";
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    console.log(`${super.startEngine()} Drive ${speed} please!`)
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine("fast"));

let truck2 = new Truck();
console.log(truck2.startEngine("slow"));
