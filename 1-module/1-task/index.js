/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let factorialValue = 1;
  
  for (let i = 2; i <= n; i++) {
    factorialValue = factorialValue * i;
  }

  return factorialValue;  
}          
