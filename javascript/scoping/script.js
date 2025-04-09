"use strict";

//Function Scope
function calcAge(birthYear) {
  console.log(firstName);

  const age = 2037 - birthYear;

  //inner function scope
  function printAge() {
    const output = `${firstName},You are ${age},born in ${birthYear}`;
    console.log(output);

    //block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, you are a millenial,${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      const output = "NEW OUTPUT";
      console.log(output);
    }
    console.log(millenial); //function scoped

    // console.log(str);//block scope
    // console.log(add(2, 3)); // error because function also behaves like a block scope inside strict mode after es6
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "WSA";
calcAge(1996);

// function printOutput() {
//     console.log(millenial);
//   }
//   printOutput();
