/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  const mapShowSalary = users.map((user) => {

    if (user.age <= age)
      return `${user.name}, ${user.balance}`;

  });
  const filterShowSalary = mapShowSalary.filter((user) => user !== undefined);
  return filterShowSalary.join('\n');
}

