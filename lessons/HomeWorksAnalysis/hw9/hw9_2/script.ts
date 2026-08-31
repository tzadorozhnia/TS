// #OPLI89c9G
//
// – Є масив:
//
//     [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr:string[] = ['Main', 'Products', 'About us', 'Contacts'];

let ul:HTMLUListElement = document.createElement('ul');

for (let item of arr) {
    let li:HTMLLIElement = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);