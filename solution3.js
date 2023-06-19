//solution 3
var basicSalary = parseFloat(prompt("Enter the basic salary:"));
var benefits = parseFloat(prompt("Enter the benefits:"));

// Constants for tax rates and NHIF contributions
var taxRates = [
  { min: 0, max: 24000, rate: 10 },
  { min: 24001, max: 32333, rate: 15 },
  { min: 32334, max: 40333, rate: 20 },
  { min: 40334, max: 48333, rate: 25 },
  { min: 48334, max: Infinity, rate: 30 }
];

var nhifContributions = [
  { min: 0, max: 5999, contribution: 150 },
  { min: 6000, max: 7999, contribution: 300 },
  { min: 8000, max: 11999, contribution: 400 },
  { min: 12000, max: 14999, contribution: 500 },
  { min: 15000, max: 19999, contribution: 600 },
  { min: 20000, max: 24999, contribution: 750 },
  { min: 25000, max: 29999, contribution: 850 },
  { min: 30000, max: 34999, contribution: 900 },
  { min: 35000, max: 39999, contribution: 950 },
  { min: 40000, max: 44999, contribution: 1000 },
  { min: 45000, max: 49999, contribution: 1100 },
  { min: 50000, max: 59999, contribution: 1200 },
  { min: 60000, max: 69999, contribution: 1300 },
  { min: 70000, max: 79999, contribution: 1400 },
  { min: 80000, max: 89999, contribution: 1500 },
  { min: 90000, max: 99999, contribution: 1600 },
  { min: 100000, max: Infinity, contribution: 1700 }
];

// Calculate payee (income tax)
var taxableIncome = basicSalary + benefits;
var payee =0;
 

for (var payee = 0; payee < taxRates; payee++) {
  var taxRate = taxRates[payee];
  if (taxableIncome > taxRate.max) {
    payee + (taxRate.max - taxRate.min + 1) * (taxRate.rate / 100);
  } else {
    payee + (taxableIncome - taxRate.min + 1) * (taxRate.rate / 100);
    break;
  }
}

// Calculate NHIF contribution
var nhifContribution = 0;

//j = salary
for (var j = 0; j < nhifContributions; j++) {
  var nhifRange = nhifContributions[j];
  if (taxableIncome > nhifRange.max) {
    nhifContribution = nhifRange.contribution;
  } else {
    nhifContribution = nhifRange.contribution;
    break;
  }
}

// Calculate NSSF deduction
var nssfDeduction = basicSalary * 0.06; // Assuming NSSF contribution rate is 6%

// Calculate gross salary
var grossSalary = basicSalary + benefits;

// Calculate net salary
var netSalary = grossSalary - payee - nhifContribution - nssfDeduction;

// Display the results
console.log("Payee (Income Tax): " + payee.toFixed(2));
console.log("NHIF Contribution: " + nhifContribution.toFixed(2));
console.log("NSSF Deduction: " + nssfDeduction.toFixed(2));
console.log("Gross Salary: " + grossSalary.toFixed(2));
console.log("Net Salary: " + netSalary.toFixed(2));
