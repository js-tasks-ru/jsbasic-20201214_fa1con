/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function createFriendLi(friend) {
  let li = document.createElement('li');
  li.textContent = `${friend.firstName} ${friend.lastName}`;
  return li;
};

function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  friends.forEach(function (friend) {
    ul.append(createFriendLi(friend));
  });

  return ul;
}
