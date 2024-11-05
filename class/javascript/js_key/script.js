// let age = 45;
// const year = 1996;
// var isStudent = false;

// console.log(age, year, isStudent);

// var x = 12;
// var y = 13;

// var sum = x + y;
// var Sum = x + y;
// var SUM = x + y;

// console.log(sum, Sum, SUM);

// console.log("welcome to the javascript primitive Data type cafe!");

// console.log("Today we are serving six main dishes,Lets meet them");

// let favoritrfood = "Pizza";

// console.log("This  is a string : i love", favoritrfood);

// console.log("type of favoritrfood ", typeof favoritrfood);

// //2. Number:number of slice of cakes
// let num = 21;
// let p1 = 3.14;

// console.log("This is an integer", num);
// console.log("Type of an integer", typeof num);
// console.log("This is an float", p1);
// console.log("Type of is an float", typeof p1);

// //3.boolean:true and false
// let isJavaScriptFun = false;
// let isBroccolitasty = true;

// console.log(isJavaScriptFun);
// console.log(isBroccolitasty);

// //4.undefined

// let futureJob;
// console.log(futureJob);
// console.log(typeof futureJob);

//====================
// let name = prompt("enter your anme");
// let address = prompt("enter your address");
// let phn = promt("enter your phone number");
// let city = prompt("enter your city");

// document.write(`name = ${name}`);
// document.write(`address = ${address}`);
// document.write(`phone no = ${phn}`);
// document.write(`city = ${city}`);
//===================

//area and perimeter
// let l = +prompt("length of the rectangle");
// var b = +prompt("breadth of the rectangle");

// console.log(`Area of rectangle is ${l * b}`);
// console.log(`Area of perimeter is ${2 * (l + b)}`);
//===============

//prt

// Prompt user for principal, rate, and time
// const p = parseFloat(prompt("Enter the principal amount:"));
// const r = parseFloat(prompt("Enter the rate of interest:"));
// const t = parseFloat(prompt("Enter the time:"));

// const totalAmount = p * (1 + r * t);

// console.log(`Total Amount after interest: ${totalAmount}`);
//===============

// let num1 = +prompt("enter first number");
// let num2 = +prompt("enter second number");
// let max;

// if (num1 > num2) {
//   max = num1;
// } else {
//   max = num2;
// }

// console.log(`The max is ${max}`);
//=================

// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid Day");
//     break;
// }

//=============

// let num1 = +prompt("Enter the first no:");
// let num2 = +prompt("Enter the second no:");

// const op = prompt("Enter the operation +,-,/,* ");

// let result;

// switch (op) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     if (num2 !== 0) {
//       result = num1 / num2;
//     } else {
//       result = "Division by zero not possible";
//     }
//     break;
//   default:
//     result = "Invalid";
//     break;
// }

// console.log(`Result: ${result}`);

//================

// function Grade() {
//   const sub1 = parseFloat(prompt("Enter marks for Subject 1:"));
//   const sub2 = parseFloat(prompt("Enter marks for Subject 2:"));
//   const sub3 = parseFloat(prompt("Enter marks for Subject 3:"));

//   const avg = (sub1 + sub2 + sub3) / 3;

//   let grade;
//   if (avg >= 80 && avg <= 100) {
//     grade = "A";
//   } else if (avg >= 60 && avg < 80) {
//     grade = "B";
//   } else if (avg >= 40 && avg < 60) {
//     grade = "C";
//   } else if (avg >= 0 && avg < 40) {
//     grade = "F";
//   } else {
//     grade = "Invalid input";
//   }

//   // Output the result
//   console.log(`Your average is: ${avg} and your grade is: ${grade}`);
// }

// Grade();

//===============

// "use strict";

// let isDriverLicense = true;

// const hasVision = true;
// sDriverLicense = false; // will not give output if use strict is used else will give even though there is error in spelling [sDriverLicense]
// if (isDriverLicense && hasVision) {
//   console.log("great driver");
// } else {
//   console.log("not a great driver");
// }

//=================
//Program to find the max of two numbers:

// const a = parseFloat(prompt("Enter the first number:"));
// const b = parseFloat(prompt("Enter the second number:"));
// const max = a > b ? a : b;
// console.log("The maximum number is:", max);

//================
//Program to print the grade for a given percentage:

// const percentage = parseFloat(prompt("Enter your percentage:"));
// let grade;
// if (percentage >= 90) grade = "A";
// else if (percentage >= 80) grade = "B";
// else if (percentage >= 70) grade = "C";
// else if (percentage >= 60) grade = "D";
// else grade = "F";
// console.log("Your grade is:", grade);

//=================
//Program to find the greatest of three numbers:

// const a = parseFloat(prompt("Enter the first number:"));
// const b = parseFloat(prompt("Enter the second number:"));
// const c = parseFloat(prompt("Enter the third number:"));
// const greatest = Math.max(a, b, c);
// console.log("The greatest number is:", greatest);

//==================
//Program to find the middle number of three numbers:

// const a = parseFloat(prompt("Enter the first number:"));
// const b = parseFloat(prompt("Enter the second number:"));
// const c = parseFloat(prompt("Enter the third number:"));
// let middle;
// if ((a > b && a < c) || (a > c && a < b)) middle = a;
// else if ((b > a && b < c) || (b > c && b < a)) middle = b;
// else middle = c;
// console.log("The middle number is:", middle);

//=================
