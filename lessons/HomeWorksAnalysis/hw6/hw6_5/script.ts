// #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

let str:string = 'Ревуть воли як ясла повні';

function stringToarray(str:string):string[]{
    return str.split(' ');
}

let arr:string[] = stringToarray(str);

console.log(arr);