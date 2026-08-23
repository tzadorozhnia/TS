// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
const app = document.getElementById('app') as HTMLElement;
let ul = (text:string):void => {
    app.innerHTML +=`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`
}

ul('text text text')