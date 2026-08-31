// #67kfznmiMl
//
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);
let book1 = { title: 'Гаррі Поттер', pageCount: 660, genre: 'фентезі' };
let book2 = { title: 'Шерлок Холмс', pageCount: 660, genre: 'детектив' };
let book3 = { title: 'Голодні ігри', pageCount: 660, genre: 'антиутопія' };
// #sA3Gg1sCp
//
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” –
// являється  масивом. Кожен автор має поля name та age.
let book4 = { title: 'Гаррі Поттер', pageCount: 660, genre: 'фентезі', authors: [{ Name: 'Джоан Роулінг', age: 60 }] };
let book5 = { title: 'Шерлок Холмс', pageCount: 660, genre: 'детектив', authors: [{ Name: ' Артур Конан Дойл', age: 71 }] };
let book6 = { title: 'Голодні ігри', pageCount: 660, genre: 'антиутопія', authors: [{ Name: ' Сюзанна Коллінз', age: 63 }] };
let users = [
    { name: 'user1', username: 'user1', password: 'qqqq' },
    { name: 'user2', username: 'user2', password: 'qqqq1' },
    { name: 'user3', username: 'user3', password: 'qqqq2' },
    { name: 'user4', username: 'user4', password: 'qqqq3' },
    { name: 'user5', username: 'user5', password: 'qqqq4' },
    { name: 'user6', username: 'user6', password: 'qqqq5' },
    { name: 'user7', username: 'user7', password: 'qqqq6' },
    { name: 'user8', username: 'user8', password: 'qqqq7' },
    { name: 'user9', username: 'user9', password: 'qqqq8' },
    { name: 'user10', username: 'user10', password: 'qqqq9' },
];
console.log(users[0]?.password);
console.log(users[1]?.password);
console.log(users[2]?.password);
console.log(users[3]?.password);
console.log(users[4]?.password);
console.log(users[5]?.password);
console.log(users[6]?.password);
console.log(users[7]?.password);
console.log(users[8]?.password);
console.log(users[9]?.password);
let weather = [
    { day: 1, morning: +10, afternoon: +15, evening: +12 },
    { day: 2, morning: +11, afternoon: +20, evening: +11 },
    { day: 3, morning: +9, afternoon: +10, evening: +8 },
    { day: 4, morning: +11, afternoon: +15, evening: +15 },
    { day: 5, morning: +20, afternoon: +25, evening: +10 },
    { day: 6, morning: +9, afternoon: +10, evening: +16 },
    { day: 7, morning: +10, afternoon: +15, evening: +12 }
];
// #bAUsaq6LI
//
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = prompt('Введіть значення х (1,0,-3)');
if (x === '0') {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).
let input = prompt('Введіть значення часу');
let time = Number(input);
if (input === null || isNaN(time)) {
    console.log('error');
}
else if (time >= 0 && time < 15) {
    console.log('в першу');
}
else if (time >= 15 && time < 30) {
    console.log('в другу');
}
else if (time >= 30 && time < 45) {
    console.log('в третю');
}
else if (time >= 45 && time <= 59) {
    console.log('в четверту');
}
else {
    console.log('error');
}
// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//     у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let inputDay = prompt('веедіть значення часу');
let day = Number(inputDay);
if (day >= 1 && day <= 10) {
    console.log('в першу');
}
else if (time > 10 && time <= 20) {
    console.log('в другу');
}
else if (time > 20 && time <= 31) {
    console.log('в третю');
}
else {
    console.log('error');
}
// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня
//     і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день,
//         назву дня англійською).
let dayNumber = Number(prompt('Enter day number'));
switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('incorrect number');
}
// #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.
let a = 10;
let b = 20;
if (a === b) {
    console.log('equal');
}
else if (a > b) {
    console.log('a max');
}
else {
    console.log('b max');
}
// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let y = '';
if (!y) {
    y = "default";
}
console.log(y);
export {};
//# sourceMappingURL=script.js.map