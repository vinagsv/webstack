// // let vinag = [
// //     "vinag",
// //     "sv",
// //     2037 - 2002,
// //     "developers",
// //     ["sachin", "surya", "faizan"],
// //   ];

// // // const age=[];
// // // for (let i = 0; i < years.length; i++) {
// // //     age.push_2024-years[i];
// // // }

// // // const years = [1991, 2000, 1995, 2002, 2013];

// // let age = [];
// // for (let i = 0; i < years.length; i++) {
// //   age.push(2037 - years[i]);
// // }

// // console.log(age);

// // console.log("_____ONLy Strings_________");
// // for (let i = 0; i < years.length; i++) {
// //     if (typeof vinag[i]!== "strings"){
// //         continue;
// //     } else {
// //         console.log(vinag[i]+":") {
// //             typeof vinag[i];
// //         }
// //     }
// // }
// let vinag = [
//   "vinag",
//   "sv",
//   2037 - 2002,
//   "developers",
//   ["sachin", "surya", "faizan"],
// ];

// for (let i = 0; i < vinag.length; i++) {
//   if (typeof vinag[i] === "string") {
//     continue;
//   } else {
//     console.log(vinag[i] + ": " + typeof vinag[i]);
//   }
// }

// console.log("———————————————Break————————————————");

// for (let i = 0; i < vinag.length; i++) {
//   if (typeof vinag[i] === "number") {
//     break;
//   } else {
//     console.log(vinag[i] + ": " + typeof vinag[i]);
//   }
// }

// //loop backwards
// console.log("———————————————loop backwards———————————————");
// for (let i = vinag.length - 1; i >= 0; i--) {
//   console.log(vinag[i]);
// }

// //loop inside loop
// console.log("———————————————loops inside loops————————————————");

// // for (let i = 1; i <= 3; i++) {
// //   console.log("started Pushups");
// //   for (let j = 1; j <= 10; j++) {
// //     console.log(`Pushups ${j}`);
// //   }
// //   console.log("Took break for 5 mins");
// // }

// for (let i = 0; i <= 5; i++) {
//   console.log("-----------------------------");
//   console.log("started pushup");
//   for (let j = 0; j <= 10 - i; j++) {
//     console.log("push up " + j);
//   }
//   console.log("Take break");
// }

// for (let j = 1; j <= 5; j++) {
//   for (let i = 1; i <= 6; i++) {
//     document.write("* ");
//   }
//   document.write("<br>");
// }

// //while
// // for (let rep = 1; rep <= 10; rep++) {
// //   console.log(`lifting the weights: ${rep}`);
// // }
// // rep = 1;
// // while (rep <= 10) {
// //   console.log(`while:Lifting weights ${rep}`);
// //   rep++;
// // }

// // let dice = Math.trunc(Math.random() * 6 + 1);
// // while (dice !== 6) {
// //   console.log("loop is about to end");
// // }

// //==================================
console.log("------for of loops------");

const names = ["Youtube", "Instagram", "Facebook", "netflix", "Amazon"];

for (const n of names) {
  console.log(n);
}

console.log("------for in loops------");
const symbols = {
  yt: "youtube",
  ig: "instagram",
  fb: "facebook",
  was: "webstack academy",
};
for (const n in symbols) {
  console.log(symbols[n]);
}
