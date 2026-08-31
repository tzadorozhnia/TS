// @ts-ignore
class User7 {
    _id;
    _name;
    _surname;
    _phone;
    constructor(_id, _name, _surname, _phone) {
        this._id = _id;
        this._name = _name;
        this._surname = _surname;
        this._phone = _phone;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let user7 = new User7(1, 'asd', 'asd', 'asd');
console.log(user7.id);
user7.id = 123;
// @ts-ignore
const user = new User7(1, 'kokos', 'asdqwe', '+964657983');
console.log(user);
// @ts-ignore
let users = [
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
export {};
//# sourceMappingURL=script.js.map