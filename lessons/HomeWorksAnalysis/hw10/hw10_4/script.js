// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному
// перезавантажені сторінки буде додавати до неї +1
let currentCount = localStorage.getItem("page_reload_counter") || "0";
let newCount = parseInt(currentCount) + 1;
let num = document.getElementById('num');
num.innerText = String(newCount);
localStorage.setItem("page_reload_counter", String(newCount));
export {};
//# sourceMappingURL=script.js.map