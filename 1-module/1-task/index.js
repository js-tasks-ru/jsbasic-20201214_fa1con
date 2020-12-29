/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let x = 1;
  for (let i = 2; i <= n; i++)
  x = x * i;
  return x;    
}          
