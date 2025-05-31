// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`);
//   },
// };

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
// }
// Object.assign(Car.prototype, Speed)
// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }

// let car = new Car;
// car.goFast()

// const Fuel = {
//   this.fuelEfficiency: kmTravelledPerLiter,
//     this.fuelCap: fuelCapInLiter,
// }

// class WheeledVehicle {
//   constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
//     this.tires = tirePressure;
  
//   }

//   tirePressure(tireIdx) {
//     return this.tires[tireIdx];
//   }

//   inflateTire(tireIdx, pressure) {
//     this.tires[tireIdx] = pressure;
//   }

//   range() {
//     return this.fuelCap * this.fuelEfficiency;
//   }
// }

// class Auto extends WheeledVehicle {
//   constructor() {
//     // the array represents tire pressure for four tires
//     super([30, 30, 32, 32], 50, 25.0);
//   }
// }

// class Motorcycle extends WheeledVehicle {
//   constructor() {
//     // array represents tire pressure for two tires
//     super([20, 20], 80, 8.0);
//   }
// }

// class Catamaran {
//   constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
//     // catamaran specific logic

//     this.propellerCount = propellerCount;
//     this.hullCount = hullCount;
//   }
// }

