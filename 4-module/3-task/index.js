/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const tr = table.querySelectorAll("tbody tr");
    const age = 1;
    const gender = 2;
    const status = 3;
    const maxAge = 18;

    tr.forEach(function (item) {

        if (item.cells[status].getAttribute('data-available') == "true") {
            item.classList.add("available");
        } else if (item.cells[status].getAttribute('data-available') == "false") {
            item.classList.add("unavailable");
        } else {
            item.setAttribute('hidden', true);
        }

        if (item.cells[gender].innerHTML == "m") {
            item.classList.add("male");
        } else {
            item.classList.add("female");
        }

        if (item.cells[age].innerHTML < maxAge) {
            item.style.textDecoration = "line-through";
        }
    })

}
