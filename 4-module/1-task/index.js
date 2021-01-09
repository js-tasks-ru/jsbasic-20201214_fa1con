/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (let name of friends) {
    let li = document.createElement('li');
    li.textContent = `${name.firstName} ${name.lastName}`;
    ul.append(li);
  }

  return ul;
}
