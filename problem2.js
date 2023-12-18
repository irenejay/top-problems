const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const pointsPerDemerit = 5;
  const demeritThreshold = 12;

  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);
    console.log(`Points: ${demeritPoints}`);

    if (demeritPoints >= demeritThreshold) {
      console.log("License suspended");
    }
  }
}

rl.question('Enter the speed of the car: ', (input) => {
  const speed = parseFloat(input);

  if (!isNaN(speed)) {
    calculateDemeritPoints(speed);
  } else {
    console.log('Invalid input. Please enter a numeric value for speed.');
  }

  rl.close();
});

