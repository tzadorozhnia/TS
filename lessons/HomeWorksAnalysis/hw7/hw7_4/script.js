// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname , email, phone,order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}


let clients = [
    new Client(33, "Kait", "Winslet", "winslet@gmail.com", "067454555455", ["milk", "bread"]),
    new Client(2, "John", "Smith", "smith@gmail.com", "067111111111", ["eggs", "bread"]),
    new Client(3, "Anna", "Brown", "brown@gmail.com", "067222222222", ["eggs", "bread", "milk"]),
    new Client(4, "Peter", "Wilson", "wilson@gmail.com", "067333333333", []),
    new Client(5, "Emma", "Taylor", "taylor@gmail.com", "067444444444", []),
    new Client(6, "Michael", "Davis", "davis@gmail.com", "067555555555", ["milk"]),
    new Client(1, "Sarah", "Miller", "miller@gmail.com", "067666666666", ["bread"]),
    new Client(8, "David", "Anderson", "anderson@gmail.com", "067777777777", ["eggs"]),
    new Client(9, "Laura", "Thomas", "thomas@gmail.com", "067888888888", ["milk", "bread"]),
    new Client(10, "James", "Moore", "moore@gmail.com", "067999999999", ["eggs", "milk"])
];

console.log(clients);
