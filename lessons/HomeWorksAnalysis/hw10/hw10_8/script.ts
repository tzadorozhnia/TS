// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const rowsInput:HTMLInputElement = document.getElementById('rows') as HTMLInputElement;
const cellsInput:HTMLInputElement = document.getElementById('cells') as HTMLInputElement;
const contentInput:HTMLInputElement = document.getElementById('content') as HTMLInputElement;
const button:HTMLButtonElement = document.getElementById('createTable') as HTMLButtonElement;

button.addEventListener('click', function ():void {

    const rows:number = Number(rowsInput.value);
    const cells:number  = Number(cellsInput.value);
    const content:string = contentInput.value;

    const table:HTMLTableElement = document.createElement('table') as HTMLTableElement;

    for (let i:number = 0; i < rows; i++) {

        const tr:HTMLTableRowElement = document.createElement('tr') as HTMLTableRowElement;

        for (let j:number = 0; j < cells; j++) {

            const td:HTMLTableCellElement = document.createElement('td') as HTMLTableCellElement;

            td.innerText = content;

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    const container:HTMLDivElement = document.getElementById('tableContainer') as HTMLDivElement;

    container.innerHTML = '';
    container.appendChild(table);
});