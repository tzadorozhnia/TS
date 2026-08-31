// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів,
//     та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився
// блок з вашим об’єктом

let form:HTMLFormElement = document.createElement("form");

let inputName:HTMLInputElement = document.createElement("input");
inputName.placeholder = "Введіть ім'я";
inputName.required = true;

let inputSurname:HTMLInputElement = document.createElement("input");
inputSurname.placeholder = "Введіть прізвище";
inputSurname.required = true;

let inputAge:HTMLInputElement = document.createElement("input");
inputAge.placeholder = "Введіть вік";
inputAge.type = "number";
inputAge.required = true;

let button:HTMLButtonElement = document.createElement("button");
button.type = "submit";
button.innerText = "Створити об'єкт";


form.append(inputName, inputSurname, inputAge, button);


let resultBlock:HTMLDivElement = document.createElement("div");
resultBlock.style.marginTop = "20px";


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let user = {
        name: inputName.value,
        surname: inputSurname.value,
        age: +inputAge.value
    };

    resultBlock.innerText = `name: ${user.name} surname: ${user.surname} age: ${user.age}`;
});


document.body.append(form, resultBlock);
