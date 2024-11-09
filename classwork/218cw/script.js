const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test Data 1
let scoreDolphins1 = calcAverage(44, 23, 71);
let scoreKoalas1 = calcAverage(65, 54, 49);

// Test Data 2
let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

// Check for Test Data 1
checkWinner(scoreDolphins1, scoreKoalas1);

// Check for Test Data 2
checkWinner(scoreDolphins2, scoreKoalas2);
