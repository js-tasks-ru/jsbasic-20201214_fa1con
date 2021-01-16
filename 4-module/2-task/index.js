/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

  Array.from(table.rows).forEach(function (row, i) {
    row.cells[i].style.backgroundColor = 'red';
  });

}
