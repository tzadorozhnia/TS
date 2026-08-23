// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

const app = document.getElementById('app') as HTMLElement;

let paragraph = (text:string):void =>{app.innerHTML +=`<p>${text}</p>`}
paragraph('text text text')