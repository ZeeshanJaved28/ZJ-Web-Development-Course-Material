console.log("Classes & Objects - Object Oriented Programming in Js");

// let obj = {
//   a: 1,
//   b: "Shani",
// };
// console.log(obj);

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };
// console.log(rabbit.__proto__ = animal); // Set rabbit.[[Prototype]] = animal;

// console.log(rabbit);
// console.log(rabbit.eats);
// console.log(rabbit.jumps);

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }
  eats() {
    console.log("We are eating some foods.");
  }
  jump() {
    console.log("We are jumping from point A to point B");
  }
}
class Lion extends Animal {
  constructor(name) {
    // Constructor Overriding
    super(name);
    console.log("Object is created... and he is a lion");
  }
  eats() {
    super.eats(); // Method Overriding
    console.log("We are eating so much food");
  }
}
let a = new Animal("Bunny");
console.log(a);
// console.log(a.eats);
// console.log(a.jump);
// console.log(a.name);
let l = new Lion("Sheru");
console.log(l);
console.log(l.eats);

class Employee {
  static sMethod() {
    console.log("Hello Static Method :-)");
  }
}
Employee.sMethod();

class Person {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, try again!");
      return;
    }
    this._name = value;
  }
}

let p = new Person("Zeeshan");
console.log(p.name);
p = new Person("");
p.name = "Shani";
console.log(p);
console.log(p.name);

// instanceof

console.log(l instanceof Lion);
console.log(a instanceof Lion);
console.log(a instanceof Animal);
console.log(l instanceof Animal);
