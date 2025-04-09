const Person = function (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;

  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear); // dont use as function gets copied and as such is very inefficient
  //   };
};

const ammar = new Person("Ammar", 2000);
const sachin = new Person("sachin", 2001);
console.log(ammar);
console.log(sachin);
console.log(ammar instanceof Person);

// let audio = new Audio();
// console.dir(audio);

//1. new empty object is created
//2.function is callled ,this={}
//{} linked to prototype
// function will automatically return {}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

ammar.calcAge();
sachin.calcAge();

console.log(Person.prototype);

console.log(ammar.__proto__);

console.log(ammar.__proto__ === Person.prototype);
console.log(ammar.__proto__ === Array.prototype);
console.log(Person.prototype.isPrototypeOf(ammar));
console.log(Person.prototype.isPrototypeOf(sachin));

console.log(Person.prototype.isPrototypeOf(Person)); //false

// 3.==>this keyword add __proto__ to the object in the 3rd stop, and link to the connstructor.Prototype which line 35 can assure

Person.prototype.species = "HomoSapians";

console.log(ammar.hasOwnProperty("firstName"));
console.log(ammar.hasOwnProperty("species")); //false because species is not ammar, s own propert but firstName is,Species are the propert that is inherited because of person.prototype

console.log(ammar);

console.log(ammar.__proto__);

console.log(ammar.__proto__.__proto__); // object prototype

console.log(ammar.__proto__.__proto__.__proto__); // null

const vinag = {
  firstname: "Vinag",
  birthYear: 2002,
};

console.log(vinag.__proto__);

console.log(Object.prototype.isPrototypeOf(vinag));

console.log(vinag.__proto__);

console.log(ammar.__proto__.__proto__ === vinag.__proto__);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //new array
console.log(arr.__proto__); //array.prototype
console.log(arr.__proto__.__proto__); //object.prototype

const h1 = document.querySelector("h1");
console.dir(h1);

//==============

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;

//   this.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is now going at ${this.speed} km/hr.`);
//   };

//   this.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is now going at ${this.speed} km/hr.`);
//   };
// }

// const car1 = new Car("TATA", 120);
// const car2 = new Car("KIA", 95);

// car1.accelerate();
// car1.accelerate();
// car1.brake();

// car2.accelerate();
// car2.brake();
// car2.brake();

//==============\

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is now going at ${this.speed} km/hr.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is now going at ${this.speed} km/hr.`);
};

const car1 = new Car("TATA", 120);
const car2 = new Car("KIA", 95);
