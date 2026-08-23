// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
class Cinderella {
    name;
    age;
    footSize;
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
    new Cinderella("Anna", 20, 36),
    new Cinderella("Maria", 22, 37),
    new Cinderella("Kate", 19, 38),
    new Cinderella("Sofia", 21, 35),
    new Cinderella("Emma", 23, 39),
    new Cinderella("Laura", 20, 40),
    new Cinderella("Julia", 24, 37),
    new Cinderella("Alice", 22, 36),
    new Cinderella("Olivia", 21, 38),
    new Cinderella("Linda", 19, 39)
];
class Prince {
    name;
    age;
    footSize;
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let prince = new Prince("William", 25, 38);
for (let cinderella of cinderellas) {
    if (cinderella.footSize === prince.footSize) {
        console.log("повинна бути з принцом", cinderella);
    }
}
let foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.footSize);
console.log(foundCinderella);
export {};
//# sourceMappingURL=script.js.map