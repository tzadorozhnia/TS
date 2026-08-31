// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
//     та повідомити про це користувача
let input = document.createElement("input");
input.placeholder = "Введіть вік";
input.id = "age";
let button = document.createElement("button");
button.addEventListener("click", function () {
    let age = document.getElementById("age");
    let ageValue = age.value;
    if (ageValue.trim() === "" || isNaN(Number(ageValue))) {
        console.log('введіть число');
    }
    else if (parseInt(ageValue) < 18) {
        console.log('Менше 18');
    }
    else {
        console.log('більше 18');
    }
});
button.innerText = "check";
document.body.append(input, button);
export {};
//# sourceMappingURL=script.js.map