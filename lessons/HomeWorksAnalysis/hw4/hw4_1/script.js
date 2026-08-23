// #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
const app = document.getElementById('app');
function getArea(a, b) {
    return a * b;
}
console.log(getArea(10, 20));
// #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
function getCircleArea(r) {
    return Math.PI * r ** 2;
}
console.log(getCircleArea(5));
// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
function getCylinderArea(r, h) {
    return 2 * Math.PI * r * (r + h);
}
console.log(getCylinderArea(5, 25));
// SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
function displayArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
displayArr([10, 5, 9, 7, 45, 'ff']);
// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function paragraph(text) {
    app.innerHTML += `
<p>${text}</p>
`;
}
paragraph('text text text');
// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
function ul(text) {
    app.innerHTML += `
<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>
`;
}
ul('text text text');
// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить
// його через document.write
function ulNumber(text, number) {
    app.innerHTML += `<ul>`;
    for (let i = 0; i < number; i++) {
        app.innerHTML += `<li>${text}</li>`;
    }
    app.innerHTML += '</ul>';
}
ulNumber('text text text', 10);
// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
function ulArr(arr) {
    app.innerHTML += `<ul>`;
    for (let i = 0; i < arr.length; i++) {
        app.innerHTML += `<li>${arr[i]}</li>`;
    }
    app.innerHTML += '</ul>';
}
ulArr([1, 'f', true]);
function printWithForIn(arr) {
    let key;
    for (let item of arr) {
        for (key in item) {
            app.innerHTML += `<div>${key} - ${item[key]}</div>`;
        }
        app.innerHTML += "<hr>";
    }
}
printWithForIn([{ 'id': 101, 'status': "active", 'tags': "admin" }, { 'id': 101, 'status': "active", 'tags': "admin" }]);
// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву
function minNumber(arr) {
    let min = arr[0] ?? 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minNumber([10, 50, 8, 77]));
// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
function sumArr(arr) {
    let sum = 0;
    if (arr.length == 0) {
        return sum;
    }
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArr([10, 50, 8, 77]));
// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function chArr(arr, ind1, ind2) {
    let znach1 = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = znach1;
    return arr;
}
let f = [10, 50, 8, 77];
console.log(f);
console.log(chArr(f, 0, 2));
export {};
//# sourceMappingURL=script.js.map