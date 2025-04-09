function checkDogs(dogsJohn, dogsHarry) {
  const correctedJohn = dogsJohn.slice(1, -2);
  const allDogs = [...correctedJohn, ...dogsHarry];
  allDogs.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
}

function getDogAges(promptMessage) {
  const input = prompt(promptMessage);
  return input.split(",").map(Number);
}

console.log("Test Case 1:");
const johnDogs1 = [2, 5, 3, 14, 6];
const harryDogs1 = [3, 2, 12, 8, 5];
checkDogs(johnDogs1, harryDogs1);

// console.log("\nTest Case 2:");
// const johnDogs2 = [7, 12, 6, 3, 8];
// const harryDogs2 = [10, 3, 4, 2, 8];
// checkDogs(johnDogs2, harryDogs2);
