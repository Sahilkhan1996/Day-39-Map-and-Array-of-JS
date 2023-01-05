//Problem 3

const ps = require("prompt-sync");
const prompt = ps();
let number = prompt("Enter a number " );
function primeFactors(number) {
    const factors = [];
    let divisor = 2;
  
    while (number >= 2) {
      if (number % divisor == 0) {
        factors.push(divisor);
        number = number / divisor;
         console.log(number);
      } else {
        divisor++;
      }
    }
    return factors;
  }
console.log(primeFactors(number));
