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

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//   a: "abc",
//   b: "def",
//   add: function () {
//     return this.a + this.b;
//   },
// };

// console.log(bar.add.call(foo))

// let turk = {
//   firstName: "Christopher",
//   lastName: "Turk",
//   occupation: "Surgeon",
//   getDescription() {
//     return (
//       this.firstName + " " + this.lastName + " is a " + this.occupation + "."
//     );
//   },
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// let binded = turk.getDescription.bind(turk)

// logReturnVal(binded);

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// let foo = {
//   a: 0,
//   incrementA: function () {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a)

// //Write a "scope-safe" constructor:

// /*
// Because constructors are functions, it’s possible to invoke them without the `new` keyword. And, if there is no explicit return statement in your function, JS will just return `undefined` rather than throw an error.

// To avoid this confusion, it’s possible to write “scope-safe” constructors such that even if the `new` keyword is omitted when it is called, a new object will be returned.
// */

// function Dog(name) {

//   let obj = Object.create(Dog.prototype)

//   obj.name = name;

//   return obj;
// }

// console.log(Dog("Buddy"));

// let dog2 = new Dog("Spot")

// console.log(dog2)

// function Dog(name) {
//   if (!(this instanceof Dog)) {
//     return new Dog(name);
//   }
//   this.name = name;
// }

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// let maxi = new Dog('Maxi', 'German Shepherd', 32);

// console.log(maxi instanceof Dog)
// console.log(maxi.bark())
// console.log(Dog.prototype.constructor)
// console.log(maxi.constructor)
// console.log(maxi instanceof DogPrototype)

// let RECTANGLE = {
//   area: function () {
//     return this.width * this.height;
//   },
//   perimeter: function () {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area; // Assign function reference
//   this.perimeter = RECTANGLE.perimeter;
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area());
// console.log(rect1.perimeter());

// function Circle(r) {
//   this.r = r;
// }

// Circle.prototype.area = function() {
//   return 3.14 * (this.r * this.r)
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// b.area().toFixed(2); // => 50.27
// a.hasOwnProperty('area'); // => false

// function Ninja() {
//   this.swung = false;
// }

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`

// let ninjaA;

// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// let ninjaB = new ninjaA.constructor()

// console.log(ninjaA.constructor === ninjaB.constructor) // => true

// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last)
//   } else {
//     this.name = first + " " + last;

//   }
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// function Person() {
//   this.firstName = "John";
//   this.lastName = "Doe";
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// const person = new Person();
// //const fullName = person.fullName;
// console.log(person.fullName());

// let ninjaA;

// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }
// let ninjaB = new ninjaA.constructor

// console.log(ninjaA.constructor === ninjaB.constructor) // => true

// function Cat(name) {
//   name = name;

//   this.purr = function() {
//     console.log('purr');
//   }

//   this.speak = function() {
//     console.log('meow!');
//   }
// }

// let butterscotch = new Cat("Butterscotch");
// console.log(butterscotch)
// butterscotch.purr();          // purr
// butterscotch.speak();         // meow!

//****important */

// class Animal {
//   baz() {
//     console.log("hello i am baz")
//   }
// }

// Animal.prototype.foo = function() {
//   console.log('this is foo');
// };

// Animal.prototype.bar = function() {
//   console.log('this is bar');
// };

// console.log(Object.getOwnPropertyNames(Animal.prototype));
// console.log(Animal.prototype);
// // { foo: [Function (anonymous)],
// //   bar: [Function (anonymous)] }

//******also important! */

// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   whoAmI() {
//     console.log(`My name is ${this.name}.`,
//                 `\nI am a ${this.color} cat.`);
//   }
// }

// let cheddar = new Cat('Cheddar', 'ginger');
// let cheddarProto = Object.getPrototypeOf(cheddar);

// console.log(Object.getOwnPropertyNames(cheddarProto));
// // ['constructor', 'whoAmI'];

// cheddar.whoAmI();  // My name is Cheddar.
//                    // I am a ginger cat.

// let arr = Array.from({0: "hi", 1: "bye", length: 1})
// console.log(arr)

// let john = {
//   firstName: "John",
//   lastName: "Doe",
//   greetings: function () {
//     console.log("hello, " + this.firstName + " " + this.lastName);
//   },
// };

// john.greetings()
