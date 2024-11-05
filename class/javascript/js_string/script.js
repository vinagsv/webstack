const airline = "Air India";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log("B737"[2]);

console.log(airline.length);

console.log("----string Methods----");

console.log(airline.indexOf("r"));

console.log(airline.lastIndexOf("i"));
console.log(airline.indexOf("Air"));

console.log(airline.slice(4));
const air = airline.indexOf(4, 7);
console.log(air);

console.log(airline.slice(0, airline.indexOf(" ")));

console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log("Hello World".slice(0, "Hello World".indexOf(" ")));

console.log(airline.slice(-1));
console.log(airline.slice(0, -1));

//lets create a function to check whether you have seat in middle or not

function checkMiddleSeat(seat) {
  const s = seat.slice(-1);
  //   const s=seat[seat.length-1];

  if (s === "B" || s === "E") {
    console.log("You got middle seat");
  } else {
    console.log("You are lucky");
  }
}

checkMiddleSeat("31B");
checkMiddleSeat("4A");

console.log("      rk.123@gmail.com      ".trim());

//replace

const priceIN = "Rs10,999";
const priceUS = priceIN.replace("Rs", "$").replace(",", ".");

console.log(priceUS);
console.log(priceIN);

const announcement = "All passengers come at boarding door 23";

//Boolean Values
const newPlane = "Airbus A380";

console.log(newPlane.includes("Air"));
console.log(newPlane.startsWith("Air"));
console.log(newPlane.endsWith("Air"));

console.log("hello me".split(" "));
console.log("hello me".split(" ").join(" "));

//padding

const message = "Goto gate 25";

console.log(message.padStart(message.length + 5, "*").padEnd(25, "+"));

const maskcard = function (number) {
  const str = number + "";
  console.log(typeof str);
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskcard(423501234896));
