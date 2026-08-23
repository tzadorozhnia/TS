let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
//
//  — відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
let newArr = coursesAndDurationArray.filter(((value) => value.monthDuration > 5));
console.log(newArr);
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let NewArr2 = coursesAndDurationArray.map((value, index) => {
    return { id: index + 1, title: value.title, monthDuration: value.monthDuration };
});
console.log(NewArr2);
export {};
//# sourceMappingURL=script.js.map