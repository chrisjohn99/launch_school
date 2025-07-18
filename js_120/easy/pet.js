class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = 0;
  }
  numberOfPets() {
    return this.pets;
  }
}

class Shelter {
  constructor() {
    this.owners = [];
  }
  adopt(owner, pet) {
    owner.pets += 1;
    let ownerIdx = this.owners.findIndex(
      (existingOwner) => existingOwner.name === owner.name
    );
    if (ownerIdx !== -1) {
      this.owners[ownerIdx].pets.push(pet);
    } else {
      this.owners.push({ name: owner.name, pets: [pet] });
    }
  }
  printAdoptions() {
    this.owners.forEach((owner) => {
      console.log(owner.name + " has adopted the following pets:");
      owner.pets.forEach((pet) => {
        console.log(`a ${pet.type} named ${pet.name}`);
      });
    });
  }
}

let butterscotch = new Pet("cat", "Butterscotch");
let pudding = new Pet("cat", "Pudding");
let darwin = new Pet("bearded dragon", "Darwin");
let kennedy = new Pet("dog", "Kennedy");
let sweetie = new Pet("parakeet", "Sweetie Pie");
let molly = new Pet("dog", "Molly");
let chester = new Pet("fish", "Chester");

let phanson = new Owner("P Hanson");
let bholmes = new Owner("B Holmes");

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
