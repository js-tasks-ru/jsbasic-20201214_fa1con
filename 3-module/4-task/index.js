/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  return users.map((user) => user.age <= age ? `${user.name}, ${user.balance}` : undefined)
    .filter((user) => user !== undefined)
    .join('\n');
}

