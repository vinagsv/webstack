// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [];
// for (let i = 0; i < 3; i++) {
//   const billInput = prompt(`Enter bill value ${i + 1}:`);
//   bills.push(Number(billInput));
// }

// const tips = bills.map(calcTip);
// const totals = bills.map((bill, index) => bill + tips[index]);

// console.log("Bills:", bills);
// console.log("Tips:", tips);
// console.log("Totals:", totals);

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];

// const tips = bills.map(calcTip);

// const totals = bills.map((bill, index) => bill + tips[index]);

// console.log("Bills:", bills);
// console.log("Tips:", tips);
// console.log("Totals:", totals);

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = [];
bills.push(Number(prompt("Enter bill value 1:")));
bills.push(Number(prompt("Enter bill value 2:")));
bills.push(Number(prompt("Enter bill value 3:")));

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
