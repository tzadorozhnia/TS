// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id=”text”.

let h1:HTMLHeadingElement = document.createElement("h1");
h1.innerText = "Hello World!";
h1.id = "text";
let button:HTMLButtonElement = document.createElement("button");
button.addEventListener("click", function () {
    let text:HTMLHeadingElement = document.getElementById("text")as HTMLHeadingElement;
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none'
    }

})
button.innerText = "off/on"
document.body.append(h1, button);
