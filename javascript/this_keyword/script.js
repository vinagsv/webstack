// "use strict";

// function showThis() {
//   console.log(this);
// }
// showThis();//in strict it is returning undefined
// showThis();//without strict it points towards global object

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - this.year);
// };

// calcAge(1996);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1996);

// const me = {
//   firstName: "rohit",
//   lastName: "kumar",
//   fullname: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };
// me.fullname();
