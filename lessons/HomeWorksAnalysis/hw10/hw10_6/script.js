// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво,
//     без натискань додаткових кнопок
let input = document.createElement("input");
let p = document.createElement("p");
input.placeholder = "Введіть кг";
input.id = "kg";
input.addEventListener("input", function () {
    p.innerText = String(Number(input.value) * 2.20462);
});
document.body.append(input, p);
export {};
//# sourceMappingURL=script.js.map