// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(33, "Kait", "Winslet", "winslet@gmail.com", "067454555455"),
    new User(2, "John", "Smith", "smith@gmail.com", "067111111111"),
    new User(3, "Anna", "Brown", "brown@gmail.com", "067222222222"),
    new User(4, "Peter", "Wilson", "wilson@gmail.com", "067333333333"),
    new User(5, "Emma", "Taylor", "taylor@gmail.com", "067444444444"),
    new User(6, "Michael", "Davis", "davis@gmail.com", "067555555555"),
    new User(1, "Sarah", "Miller", "miller@gmail.com", "067666666666"),
    new User(8, "David", "Anderson", "anderson@gmail.com", "067777777777"),
    new User(9, "Laura", "Thomas", "thomas@gmail.com", "067888888888"),
    new User(10, "James", "Moore", "moore@gmail.com", "067999999999")
];

let usFilter = users.sort((user1, user2) => user1.id-user2.id);
console.log(usFilter);