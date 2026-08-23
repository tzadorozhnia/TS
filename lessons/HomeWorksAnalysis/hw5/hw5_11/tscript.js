// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13
let sumArr = (arr) => {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};
console.log(sumArr([10, 50, 8, 77]));
export {};
//# sourceMappingURL=tscript.js.map