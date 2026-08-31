// #RbQGnH5Du
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// яка дістає потрібний масив з localStorage та додає в нього об’єкт.
//
// сигнатура функції –
// addToLocalStorage(arrayName: string, objToAdd: any): void

function addToLocalStorage<T>(arrayName: string, objToAdd: T): void {
    const currentData = localStorage.getItem(arrayName) || '[]';

    try {
        const array: T[] = JSON.parse(currentData);

        if (!Array.isArray(array)) {
            console.error(`Ключ "${arrayName}" в localStorage містить не масив!`);
            return;
        }

        array.push(objToAdd);

        localStorage.setItem(arrayName, JSON.stringify(array));

    } catch (error) {
        console.error('Помилка під час парсингу JSON:', error);
    }
}

type User = {
    id: number;
    name: string;
    role: string;
};

const newUser: User = {
    id: 1,
    name: 'Олексій',
    role: 'admin'
};

addToLocalStorage<User>('usersList', newUser);

addToLocalStorage<User>('usersList', {
    id: 2,
    name: 'Марія',
    role: 'user'
});

console.log(
    JSON.parse(localStorage.getItem('usersList') || '[]')
);