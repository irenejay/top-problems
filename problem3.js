const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// KRA, NHIF, and NSSF values
const kraRates = {
  payeThreshold: 24000,
  payeRates: {
    lower: 0.1,
    upper: 0.25,
  },
};

const nhifRates = {
  lowerLimit: 0,
  upperLimit: 20000,
  rate: 1500,
};

const nssfRate = 0.06;

function calculatePayee(grossSalary) {
  if (grossSalary <= kraRates.payeThreshold) {
    return 0;
  } else {
    const taxableAmount = grossSalary - kraRates.payeThreshold;
    return kraRates.payeRates.lower * taxableAmount;
  }
}

function calculateNHIF(grossSalary) {
  return grossSalary <= nhifRates.upperLimit ? nhifRates.rate : 0;
}

function calculateNSSF(grossSalary) {
  return grossSalary * nssfRate;
}

rl.question('Enter Basic Salary: ', (basicSalary) => {
  rl.question('Enter Benefits: ', (benefits) => {
    const grossSalary = parseFloat(basicSalary) + parseFloat(benefits);

    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const gross = grossSalary - payee - nhif - nssf;
    
    console.log(`\nGross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhif}`);
    console.log(`NSSF Deductions: ${nssf}`);
    console.log(`Net Salary: ${gross}\n`);

    rl.close();
  });
});