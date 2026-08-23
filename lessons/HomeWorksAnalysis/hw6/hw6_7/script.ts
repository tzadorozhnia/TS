// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
//     або навпаки  – залежно від значення аргументу direction.

let nums = [11,21,3];

function sortNums(array:number[],direction:string):number[]{
    return [...array].sort((a:number, b:number):number => {
        if (direction === 'ascending') {
            return a - b; // Від меншого до більшого
        }
        if (direction === 'descending') {
            return b - a; // Від більшого до меншого
        }
        return 0; // Якщо direction передано некоректно
    });
}

console.log(sortNums(nums,'ascending')) // [3,11,21]
console.log(sortNums(nums,'descending')) // [21,11,3]

const sortNums2 = (array:number[], direction:string):number[] => {
    return [...array].sort((a:number, b:number):number => direction === 'ascending' ? a - b : b - a);
};
console.log(sortNums2(nums,'ascending')) // [3,11,21]
console.log(sortNums2(nums,'descending')) // [21,11,3]