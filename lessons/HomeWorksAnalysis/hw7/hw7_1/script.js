// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
//@ts-ignore
// class User{
//     private _id:number;
//     private _name:string;
//     private _surname:string;
//     private _email:string;
//     private _phone:string;
//
//     constructor(id:number, name:string, surname:string , email:string, phone:string){
//         this._id = id;
//         this._name = name;
//         this._surname = surname;
//         this._email = email;
//         this._phone = phone;
//
//     }
//
//
//     get id(): number {
//         return this._id;
//     }
//
//     set id(value: number) {
//         this._id = value;
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         this._name = value;
//     }
//
//     get surname(): string {
//         return this._surname;
//     }
//
//     set surname(value: string) {
//         this._surname = value;
//     }
//
//     get email(): string {
//         return this._email;
//     }
//
//     set email(value: string) {
//         this._email = value;
//     }
//
//     get phone(): string {
//         return this._phone;
//     }
//
//     set phone(value: string) {
//         this._phone = value;
//     }
// }
class User {
    id;
    name;
    surname;
    email;
    phone;
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let users = [
    new User(1, "Kait", "Winslet", "winslet@gmail.com", "067454555455"),
    new User(2, "John", "Smith", "smith@gmail.com", "067111111111"),
    new User(3, "Anna", "Brown", "brown@gmail.com", "067222222222"),
    new User(4, "Peter", "Wilson", "wilson@gmail.com", "067333333333"),
    new User(5, "Emma", "Taylor", "taylor@gmail.com", "067444444444"),
    new User(6, "Michael", "Davis", "davis@gmail.com", "067555555555"),
    new User(7, "Sarah", "Miller", "miller@gmail.com", "067666666666"),
    new User(8, "David", "Anderson", "anderson@gmail.com", "067777777777"),
    new User(9, "Laura", "Thomas", "thomas@gmail.com", "067888888888"),
    new User(10, "James", "Moore", "moore@gmail.com", "067999999999")
];
console.log(users);
export {};
//# sourceMappingURL=script.js.map