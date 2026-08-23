// #y7crMeFwHcS
//
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
const app = document.getElementById('app');
for (let i = 0; i < 10; i++) {
    app.innerHTML += '<div>Довільний текст</div>';
}
// #TYj7ncx
//
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    app.innerHTML += `<div>Довільний текст ${i}</div>`;
}
// #uzkt71dp
//
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 10) {
    app.innerHTML += `<h1>Довільний текст</h1>`;
    i++;
}
// #OeT7t3uUMFi
//
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let y = 0;
while (y < 10) {
    app.innerHTML += `<h1>Довільний текст ${y}</h1>`;
    y++;
}
// #vLSZKMlO
//
// – Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру за шаблоном
//
// Масив:
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!–
//         і тд інші об’єкти масиву
//
//         …
//
//         –>
//     </ul>
// замість ‘ITEM OF ARRAY’ підставити елемент з масиву, щоб вийшов цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
app.innerHTML += '<ul>';
for (let item of listOfItems) {
    app.innerHTML += `<li>${item}</li>`;
}
app.innerHTML += '</ul>';
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCF9x5j1Q7od1PDq1HEEQ4FKV40HunApRtCv8UMZbWVQ&s=10'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let product of products) {
    app.innerHTML += `
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price – ${product.price}</h3>
            <img src="${product.image}" alt="" class=product-image">
        </div>
    `;
}
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
// – користувачів зі статусом true
app.innerHTML += `<div>– користувачів зі статусом true</div>`;
for (let user of users) {
    if (user.status) {
        app.innerHTML += `<div>${user.name}</div>`;
    }
}
app.innerHTML += `<div>– користувачів зі статусом false</div>`;
for (let user of users) {
    if (!user.status) {
        app.innerHTML += `<div>${user.name}</div>`;
    }
}
app.innerHTML += `<div>– користувачів, які старші за 30 років</div>`;
for (let user of users) {
    if (user.age > 30) {
        app.innerHTML += `<div>${user.name}</div>`;
    }
}
export {};
//# sourceMappingURL=script.js.map