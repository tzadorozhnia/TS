// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву
let minNumber = (arr:number[]):number =>{
    let min:number = arr[0]!;
    for(let i=1; i<arr.length; i++){
        if (arr[i]! < min){
            min = arr[i]!;
        }
    }
    return min;
}
console.log(minNumber([10,50,8,77]))