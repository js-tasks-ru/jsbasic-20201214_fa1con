/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let strSplitted = str.split('-');

  let upper = strSplitted.map(function (item, index) {

    if (index == 0) {
      return item;
    } else {
      return item[0].toUpperCase() + item.slice(1);
    }

  });

  let joinSplitted = upper.join('');
  return joinSplitted;
}
