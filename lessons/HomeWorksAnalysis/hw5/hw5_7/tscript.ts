// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить
// його через document.write
const app = document.getElementById('app') as HTMLElement;

let ulNumber = (text:string,number:number):void =>{
    app.innerHTML +=`<ul>`
    for(let i=0; i<number; i++) {
        app.innerHTML +=`<li>${text}</li>`
    }
    app.innerHTML +='</ul>'

}
ulNumber('text text text', 10)