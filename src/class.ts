class Rectangle {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getArea(): number { 
    return this.x * this.y;
  }

  static printConsole(): void {
    console.log("hello, world!");
  }
}

Rectangle.printConsole();
let square = new Rectangle(4, 4);
console.log(square.getArea());