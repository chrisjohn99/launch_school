class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getArea() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side)
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25