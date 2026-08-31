// #RbQGnH5Du
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// яка дістає потрібний масив з localStorage та додає в нього об’єкт.
//
// сигнатура функції –
// addToLocalStorage(arrayName: string, objToAdd: any): void
function addToLocalStorage(arrayName, objToAdd) {
    const currentData = localStorage.getItem(arrayName) || '[]';
    try {
        const array = JSON.parse(currentData);
        if (!Array.isArray(array)) {
            console.error(`Ключ "${arrayName}" в localStorage містить не масив!`);
            return;
        }
        array.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(array));
    }
    catch (error) {
        console.error('Помилка під час парсингу JSON:', error);
    }
}
const newUser = {
    id: 1,
    name: 'Олексій',
    role: 'admin'
};
addToLocalStorage('usersList', newUser);
addToLocalStorage('usersList', {
    id: 2,
    name: 'Марія',
    role: 'user'
});
console.log(JSON.parse(localStorage.getItem('usersList') || '[]'));
export {};
//# sourceMappingURL=script.js.map