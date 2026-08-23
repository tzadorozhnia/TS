// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
const app = document.getElementById('app');
let ulArr = (arr) => {
    app.innerHTML += `<ul>`;
    for (let i = 0; i < arr.length; i++) {
        app.innerHTML += `<li>${arr[i]}</li>`;
    }
    app.innerHTML += '</ul>';
};
ulArr([1, 'f', true]);
export {};
//# sourceMappingURL=tscript.js.map