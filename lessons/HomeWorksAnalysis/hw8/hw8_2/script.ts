// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об'єкта.
//
// Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.


// function CopyObject(value) {
//     if (value === undefined){
//         return undefined
//     }
//     if (value === null){
//         return null
//     }
//     if (Number.isNaN(value)) {
//         return NaN;
//     }
//
//     if (typeof value !== 'object') {
//         return value;
//     }
//
//     let strObf = JSON.stringify(value);
//     let newObj = JSON.parse(strObf);
//
//     for (let key in value) {
//
//         if (value[key] === undefined) {
//             newObj[key] = undefined;
//         }
//         if (value[key] === null) {
//             newObj[key] = null;
//         }
//         if (Number.isNaN(value[key])) {
//             newObj[key] = NaN;
//         }
//         if (typeof value[key] === 'function') {
//             newObj[key] = value[key];
//         }
//     }
//
//     return newObj;
// }
//
// obj = {
//     name: "John",
//     age: 32,
//     foo(){
//         console.log(`name:${this.name} age: ${this.age}`);
//     }
// }
//
// copy = CopyObject(obj);
// console.log(copy);
// copy?.foo()



type FunctionCloneObject = { functionClone: Function, key: string };

function cloner<T>(obj: T): T {
    if (obj) {
        const functions: Array<FunctionCloneObject> = [];

        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                // const functionClone = obj[key].bind({});
                const functionClone = (obj[key] as Function).bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObj: T = JSON.parse(JSON.stringify(obj));

        for (const func of functions) {
            (cloneObj as any)[func.key] = func.functionClone;
        }

        console.log(cloneObj);
        return cloneObj

    }

    throw new Error('!!!!!');

}

const clone = cloner({
    id: 123, name: 'asdsad', greeting() {
        console.log('hello')
    }, foo() {
        console.log('bar')
    }
});
clone.foo();