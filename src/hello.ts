let hello:string = "hello typescript!";
console.log(hello);

function add(a: Number,b: Number) {
  console.log(a, b);
}
add(5, 10);

enum Weekday { Mon, Tues, Wed, Thurs, Fri, Sat, Sun }
let monday = Weekday.Mon;
console.log(monday);

type EventType = "keyup" | "keydown";
let thisEvent:EventType = "keyup";

// Array
let items:number[] = [1, 2, 3];

// Tuple
let tup:[string, number] = ["tuple", 100];

let number1:any = 50;
number1.toFixed(0); // Works - Detects during runtime

let number2:Object = 50;
// number2.toFixed(0); // Does not work - Detects during compilation

let unionArray:(number | string | boolean)[] = [1, "hello,world!", true];
let genericArray:Array<number | string> = [1, "hello,world!"];
let genericFunctionArray:Array<() => string> = [() => "one", () => "two"];

// void return
function goodbye():void {
  console.log("Hello, World!");
}

// strictNullCheck: (default true), false로 변경시 undefined / null 할당이 가능해진다.
let apple: string = null;
let banana: string = undefined;

function compareMax(x: number, y: number): number {
  return (x > y) ? x : y;
}

function isXLargerThanY(x: number, y: number): (number | string) {
  return (x > y) ? x : "That is not true";
}
console.log(isXLargerThanY(3, 5));
console.log(isXLargerThanY(5, 4));

function initializedComparator(x: number = 1, y: number = 0): number {
  return (x > y) ? x : y;
}
console.log(initializedComparator());

function selectiveParameter(x: number, y?: number): number {
  return x + y;
}
console.log(selectiveParameter(1));
console.log(selectiveParameter(1, 2));

// Function Overload
// 각자 개별적인 블록을 가질 수 없음.
function addOverload(a: string, b: string): string;
function addOverload(a: number, b: number): number;
function addOverload(a: any, b: any): any {
  return a + b;
}


let person = {
  name: "Happy",
  hello: function (name2: string) {
    console.log(this);
    console.log("Hello, " + this.name + " " + name2);
  }
}
person.hello("World");

// Usage of `this` within Arrow function
// `this`를 매개변수로 쓸 경우, 반드시 가장 앞에 써야한다.
interface PersonType {
  name: string;
  hello(this: PersonType, name2: string): string;
}
let typedPerson: PersonType = {
  name: "New",
  hello: function (this: PersonType, name2: string): string {
    console.log(this);
    let message = `Hello, ${this.name} ${name2}`;
    return message;
  }
}
console.log(typedPerson.hello('World!'));

let myConcat: (str1: string, str2: string) => string = (str1, str2) => { return str1 + str2; };

// Defining function type using interface
interface Callback {
  (message: string): any;
}
function callbackFunc(message: string, callback: Callback) {
  return callback(message);
}
let responseMessage = callbackFunc("hello, world of callback!", message => console.log(message));