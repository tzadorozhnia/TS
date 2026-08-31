// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
const rowsInput = document.getElementById('rows');
const cellsInput = document.getElementById('cells');
const contentInput = document.getElementById('content');
const button = document.getElementById('createTable');
button.addEventListener('click', function () {
    const rows = Number(rowsInput.value);
    const cells = Number(cellsInput.value);
    const content = contentInput.value;
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            const td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    const container = document.getElementById('tableContainer');
    container.innerHTML = '';
    container.appendChild(table);
});
export {};
//# sourceMappingURL=script.js.map