/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.createUserTable(rows);
  }

  createThead(size) {
    let thead = document.createElement('thead'),
      tr = document.createElement('tr');
    thead.append(tr);

    for (let i = 0; i < size; i++) {
      let th = document.createElement('th');
      tr.append(th);
    }

    tr.cells[0].textContent = "Имя";
    tr.cells[1].textContent = "Возраст";
    tr.cells[2].textContent = "Зарплата";
    tr.cells[3].textContent = "Город";
    return thead;
  }

  createButton(){
    let button = document.createElement('button');    
      button.textContent = 'X';
      button.onclick = () => button.parentElement.parentElement.remove();
    return button;
  }

  createTbody(rows) {
    let tbody = document.createElement('tbody');
    let that = this;

    rows.forEach(function (item) {
      let tr = document.createElement('tr');
      tbody.append(tr);

      Object.values(item).forEach(function (value) {
        let td = document.createElement('td');
        tr.append(td);
        td.textContent = value;
      });
      
      let td = document.createElement('td');
      tr.append(td);
      td.append(that.createButton());
      
    });
    return tbody;
  }
  
  createUserTable(rows) {
    let table = document.createElement('table');
    table.append(this.createThead(Object.keys(rows[0]).length + 1));
    table.append(this.createTbody(rows));
    return table;
  }
}
