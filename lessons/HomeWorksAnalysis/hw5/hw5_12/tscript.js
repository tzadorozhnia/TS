// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let chArr = (arr, ind1, ind2) => {
    let znach1 = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = znach1;
    return arr;
};
let f = [10, 50, 8, 77];
console.log([...f]);
console.log(chArr(f, 0, 2));
export {};
//# sourceMappingURL=tscript.js.map