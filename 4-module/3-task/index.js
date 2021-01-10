/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tr = table.querySelectorAll("tbody tr");   

    for (let i = 0; i < tr.length; i++) {

        if (tr[i].cells[3].getAttribute('data-available') == "true") {
            tr[i].classList.add("available");
        } else if (tr[i].cells[3].getAttribute('data-available') == "false") {
            tr[i].classList.add("unavailable");
        } else {
            tr[i].setAttribute('hidden', true);
        }

        if (tr[i].cells[2].innerHTML == "m") {
            tr[i].classList.add("male");
        } else {
            tr[i].classList.add("female");
        }

        if (tr[i].cells[1].innerHTML < 18) {
            tr[i].style.textDecoration = "line-through";
        }
    }


}
