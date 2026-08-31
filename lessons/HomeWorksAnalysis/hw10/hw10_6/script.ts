// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво,
//     без натискань додаткових кнопок

let input:HTMLInputElement = document.createElement("input");
let p:HTMLParagraphElement = document.createElement("p");
input.placeholder = "Введіть кг";
input.id = "kg";

input.addEventListener("input", function ():void {
    p.innerText = String(Number(input.value)*2.20462);
})



document.body.append(input,p);