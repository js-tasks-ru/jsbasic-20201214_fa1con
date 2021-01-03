/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  
  for (const key in salaries) { 
    if (typeof salaries[key] === 'number' &&
        !Number.isNaN(salaries[key]) &&
        salaries[key] !== Infinity &&
        salaries[key] !== -Infinity
        ) {
      sum += salaries[key];
    }    
  }
  
  return sum;
}
