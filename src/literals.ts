let person2: { name: string, city: string }[];

person2 = [
  { name: "a", city: "seoul" },
  { name: "b", city: "daejeon" },
  { name: "c", city: "daegu" },
  { name: "b", city: "busan" }
]
console.log(JSON.stringify(person2));

class Person3 {
  public full: string;
  constructor(public name: string, public city: string) {
    this.full = name + " (" + city + ")";
  }
}
let person3: Person3[] = [
  new Person3("lee", "seoul"),
  new Person3("kim", "daejeon"),
  new Person3("park", "busan")
]
console.log(JSON.stringify(person3));

interface Person4 {
  name: string;
  city: string;
}
let person4: Person4[] = [
  { name: "a", city: "seoul" },
  { name: "b", city: "daejeon" },
  { name: "c", city: "busan" }
]
console.log(JSON.stringify(person4));

interface IFormat {
  (data: string, toUpper?: boolean): string;
}
let format: IFormat = function (str: string, isUpper: boolean) {
  if (isUpper) {
    return str.toUpperCase();
  } else {
    return str;
  }
}
console.log(format("hello", true));