// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км. на годину`);
    };

    this.info = function () {
        console.log(`model – ${this.model}, manufacturer – ${this.manufacturer}, year – ${this.year}, maxSpeed – ${this.maxSpeed}, engineVolume – ${this.engineVolume}`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed+newSpeed;
    }

    this.changeYear= function (newValue) {
        this.year = newValue;
    }

    this.addDriver= function (driver) {
        this.driver = driver;
    }

}
let car1 = new Car(
    "Civic",
    "Honda",
    2020,
    220,
    1.5
);

car1.drive();
car1.info();
car1.increaseMaxSpeed(5);
car1.info();
car1.changeYear(1990);
car1.info();
car1.addDriver({name:'Max', age:45});
console.log(car1);