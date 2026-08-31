// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
//     та повідомити про це користувача

let input:HTMLInputElement = document.createElement("input");

input.placeholder = "Введіть вік";
input.id = "age";
let button:HTMLButtonElement = document.createElement("button");
button.addEventListener("click", function () {
        let age:HTMLInputElement = document.getElementById("age") as HTMLInputElement;
        let ageValue:string = age.value
        if (ageValue.trim() === "" || isNaN(Number(ageValue))) {
            console.log('введіть число');
        }
        else if (parseInt(ageValue) < 18) {
            console.log('Менше 18');
        } else {
            console.log('більше 18');
        }
    }
)
button.innerText = "check"
document.body.append(input, button);

 