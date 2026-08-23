// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

let arr:number[] = [10,8,-7,55,987,-1011,0,1050,0];
let strings1:string[] = arr.map(String);
console.log(strings1);

const strings2:string[] = arr.map(num => num.toString());
console.log(strings2);