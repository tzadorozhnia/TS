// @ts-ignore
class User7 {

    constructor(
        private _id: number, private _name: string, private _surname: string, private _phone: string) {
    }


    get id(): number {
        return this._id;
    }


    set id(value: number) {
        this._id = value;
    }

// id: number;
    // name: string;
    // surname: string;
    // phone: string;
    //
    // constructor(id: number, name: string, surname: string, phone: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.surname = surname;
    //     this.phone = phone;
    // }
}

let user7 = new User7(1, 'asd', 'asd', 'asd');
console.log(user7.id);
user7.id = 123

// @ts-ignore
const user = new User7(1, 'kokos', 'asdqwe', '+964657983');
console.log(user);

// @ts-ignore
let users: User7[] = [
    new User7(1, 'kokos', 'asdqwe', '+964657983'),
    new User7(1, 'kokos', 'asdqwe', '+964657983'),
    new User7(1, 'kokos', 'asdqwe', '+964657983'),
    new User7(1, 'kokos', 'asdqwe', '+964657983'),
    new User7(1, 'kokos', 'asdqwe', '+964657983'),
    new User7(1, 'kokos', 'asdqwe', '+964657983'),
    new User7(1, 'kokos', 'asdqwe', '+964657983')
];
console.log(users);
// @ts-ignore
const filterUsers = users.filter((user) => user.getId() % 2 === 0);
console.log(filterUsers);