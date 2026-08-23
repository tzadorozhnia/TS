// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
class User2 {
    _id;
    name;
    surname;
    email;
    phone;
    constructor(_id, name, surname, email, phone) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let users = [
    new User2(1, "Kait", "Winslet", "winslet@gmail.com", "067454555455"),
    new User2(2, "John", "Smith", "smith@gmail.com", "067111111111"),
    new User2(3, "Anna", "Brown", "brown@gmail.com", "067222222222"),
    new User2(4, "Peter", "Wilson", "wilson@gmail.com", "067333333333"),
    new User2(5, "Emma", "Taylor", "taylor@gmail.com", "067444444444"),
    new User2(6, "Michael", "Davis", "davis@gmail.com", "067555555555"),
    new User2(7, "Sarah", "Miller", "miller@gmail.com", "067666666666"),
    new User2(8, "David", "Anderson", "anderson@gmail.com", "067777777777"),
    new User2(9, "Laura", "Thomas", "thomas@gmail.com", "067888888888"),
    new User2(10, "James", "Moore", "moore@gmail.com", "067999999999")
];
let usFilter = users.filter((user) => user.id % 2 === 0);
console.log(usFilter);
export {};
//# sourceMappingURL=script.js.map